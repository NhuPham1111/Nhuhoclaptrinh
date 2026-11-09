export function getStorageValue<T>(key: string, initialValue: T): T {
  const saved = localStorage.getItem(key);
  if (!saved || saved === "undefined") {
    return initialValue;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return initialValue;
  }
}

export function setStorageValue<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}
