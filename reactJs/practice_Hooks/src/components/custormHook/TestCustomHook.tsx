import { useEffect, useRef, useState } from "react";
import { useToggle } from "./hooks/useToggle";
import useDebounce from "./hooks/useDebounce";
import usePrevious from "./hooks/usePrevious";
import useFetch from "./hooks/useFetch";
import useFetchCancelApi from "./hooks/useFetchCanelApi";

type User = {
  id: number;
  name: string;
  username?: string;
  email: string;
};

interface CardProps {
  title: string;
  description?: string;
  features?: string[];
  children: React.ReactNode;
}

const Card = ({ title, description, features, children }: CardProps) => (
  <div className="border rounded-xl p-4 shadow-sm">
    <h2 className="text-xl font-bold py-3">{title}</h2>
    {description && <p className="text-sm text-gray-700">{description}</p>}
    {features && (
      <ul className="list-disc pl-5 text-sm mt-2">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    )}
    <div className="mt-4">{children}</div>
  </div>
);

export default function TestCustomHook() {
  // Hooks state
  const { isOpen, toggle } = useToggle(false);
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce(search, 500);
  const [inputValue, setInputValue] = useState<string>("");
  const previous = usePrevious(inputValue);
  const [scrollY, setScrollY] = useState(0);

  // API fetching
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data: allData, isLoading, error } = useFetch<User[]>(url);
  const {
    data: allData1,
    isLoading: isLoading1,
    error: error1,
  } = useFetchCancelApi<User[]>(url);

  // Filter data client-side by search (name or username)
  const data = allData?.filter(
    (u) =>
      u.name.toLowerCase().includes(debouncedValue.toLowerCase()) ||
      u.username?.toLowerCase().includes(debouncedValue.toLowerCase()),
  );
  const data1 = allData1?.filter(
    (u) =>
      u.name.toLowerCase().includes(debouncedValue.toLowerCase()) ||
      u.username?.toLowerCase().includes(debouncedValue.toLowerCase()),
  );

  // Scroll tracking
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bài 1: useToggle */}
        <Card
          title="🧪 Bài 1: useToggle"
          description="Chức năng toggle() → đảo trạng thái true/false"
        >
          <div className="flex flex-col items-center p-4">
            <div
              onClick={toggle}
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOpen ? "bg-green-500" : "bg-gray-400"
                }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOpen ? "translate-x-6" : "translate-x-0"
                  }`}
              />
            </div>
            <p className="mt-3">
              Status:{" "}
              <span
                className={
                  isOpen
                    ? "text-green-600 font-bold"
                    : "text-gray-500 font-bold"
                }
              >
                {isOpen ? "ON" : "OFF"}
              </span>
            </p>
          </div>
        </Card>

        {/* Bài 2: useDebounce */}
        <Card
          title="⏰ Bài 2: useDebounce"
          description="Delay value update when changes rapidly (500ms)"
          features={["Fast typing", "Debounce delay", "Compare differences"]}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type something..."
            className="p-2 border w-full rounded mb-3"
          />
          <div className="space-y-2">
            <p>
              Actual:{" "}
              <span className="font-semibold text-orange-600">
                {search || "—"}
              </span>
            </p>
            <p>
              Debounced:{" "}
              <span className="font-semibold text-blue-600">
                {debouncedValue || "—"}
              </span>
            </p>
          </div>
        </Card>

        {/* Bài 3: usePrevious */}
        <Card
          title="🔄 Bài 3: usePrevious"
          description="Store previous state value"
          features={["Current value", "Previous value", "Detect changes"]}
        >
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type to see previous..."
            className="p-2 border w-full rounded mb-3"
          />
          <div className="space-y-2">
            <p>
              Current:{" "}
              <span className="font-semibold text-indigo-600">
                {inputValue || "—"}
              </span>
            </p>
            <p>
              Previous:{" "}
              <span className="font-semibold text-purple-600">
                {previous || "—"}
              </span>
            </p>
            {inputValue !== previous && previous && (
              <p className="text-sm text-green-600">✅ Value changed!</p>
            )}
          </div>
        </Card>

        {/* Bài 4: useFetch (NO CANCEL - BUGGY) */}
        <Card
          title="🔴 Bài 4: useFetch (NO CANCEL)"
          description="Basic fetch without cancellation"
          features={[
            "❌ Race condition",
            "❌ Memory leak",
            "❌ No error reset",
          ]}
        >
          {error && (
            <p className="text-red-500 text-sm font-semibold mb-2">
              ❌ Error: {error}
            </p>
          )}
          {isLoading && (
            <p className="text-orange-600 text-sm font-semibold mb-2">
              ⏳ Loading...
            </p>
          )}
          <div className="p-3 border-2 border-red-400 rounded bg-red-50">
            <p className="text-xs text-red-600 mb-2 italic">
              🐛 All requests execute → old data overwrites new
            </p>
            <div className="max-h-40 overflow-y-auto space-y-1">
              {data?.map((u) => (
                <p key={u.id} className="text-sm">
                  🔴 {u.name}
                </p>
              ))}
              {!isLoading && !data && (
                <p className="text-gray-500 text-sm">Search to see users...</p>
              )}
            </div>
          </div>
        </Card>

        {/* Bài 5: useFetchCancelApi (WITH CANCEL - FIXED) */}
        <Card
          title="🟢 Bài 5: useFetchCancelApi (WITH CANCEL)"
          description="Fetch with automatic cancellation"
          features={[
            "✅ Aborts old requests",
            "✅ No memory leak",
            "✅ Resets errors",
          ]}
        >
          {error1 && (
            <p className="text-red-500 text-sm font-semibold mb-2">
              ❌ Error: {error1}
            </p>
          )}
          {isLoading1 && (
            <p className="text-blue-600 text-sm font-semibold mb-2">
              ⏳ Loading...
            </p>
          )}
          <div className="p-3 border-2 border-green-400 rounded bg-green-50">
            <p className="text-xs text-green-600 mb-2 italic">
              ✅ AbortController cancels old requests → only latest shown
            </p>
            <div className="max-h-40 overflow-y-auto space-y-1">
              {data1?.map((u) => (
                <p key={u.id} className="text-sm">
                  🟢 {u.name}
                </p>
              ))}
              {!isLoading1 && !data1 && (
                <p className="text-gray-500 text-sm">Search to see users...</p>
              )}
            </div>
          </div>
        </Card>

        {/* Bài 6: Scroll Listener */}
        <Card
          title="📜 Bài 6: Scroll Listener"
          description="Track scroll position with useEffect"
          features={[
            "Add event listener",
            "Remove listener (cleanup)",
            "Prevent memory leak",
          ]}
        >
          <div
            className="w-full h-[200px] overflow-auto bg-blue-100 p-4 rounded border-2 border-blue-400"
            ref={scrollRef}
          >
            <div className="space-y-2">
              <p className="sticky top-0 bg-blue-100 font-bold text-blue-700 py-2">
                📍 Scroll Y: {scrollY}px
              </p>
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="p-3 bg-white rounded text-sm text-gray-600 border"
                >
                  Item {i + 1} - Keep scrolling to see the position change
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
