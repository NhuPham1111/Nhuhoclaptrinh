import { useEffect, useState } from "react";
import { getStorageValue, setStorageValue } from "../../utills/storage.util";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() =>
    getStorageValue(key, initialValue),
  );

  useEffect(() => {
    setStorageValue(key, storedValue);
  }, [key, storedValue]);

  // sync giữa nhiều tab
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [key]);

  return [storedValue, setStoredValue] as const;
}
