import { useEffect } from "react";
import useDebounce from "../custormHook/hooks/useDebounce";
import useLocalStorage from "../custormHook/hooks/useLocalStorage";

export default function AutoSaveInput() {
  const [text, setText] = useLocalStorage("auto-save", "");
  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    setText(debouncedText);
  }, [debouncedText]);

  return (
    <>
      <div className="p-6 border">
        <h2 className="text-xl font-bold mb-4">
          Bài 8: Auto save input → localStorage (useEffect)
        </h2>
        <p>🎯 Yêu cầu bài tập</p>
        <p>👉 Khi user nhập input:</p>
        <ul className="list-disc">
          <li>Tự động lưu vào localStorage</li>
          <li>Reload page vẫn giữ dữ liệu</li>
          <li>Không lưu liên tục (dùng debounce)</li>
          <li>Code clean, tách logic rõ ràng</li>
        </ul>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            className="border p-2 w-full"
          />
          <p className="mt-2 text-sm text-gray-500">
            Auto saved to localStorage (delay 500ms)
          </p>
        </div>
      </div>
    </>
  );
}
