import { useEffect, useRef, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function InfiniteScroll() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // ✅ Fetch data
  useEffect(() => {
    const controler = new AbortController();
    const signal = controler.signal;
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`,
          { signal },
        );
        const data = await res.json();

        // append data (không replace)
        setPosts((prev) => [...prev, ...data]);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    return () => controler.abort();
  }, [page]);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  // ✅ Detect scroll bottom
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (
        el.scrollTop + el.clientHeight >= el.scrollHeight - 5 &&
        !loadingRef.current
      ) {
        loadingRef.current = true;
        setPage((prev) => prev + 1);
      }
    };

    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        🚀Bai 7: Scroll listener (useEffect)
      </h2>

      <div
        ref={boxRef}
        className="h-[400px] overflow-auto border p-4 space-y-3"
      >
        {posts.map((post, index) => (
          <div key={`${post.id} -${index}`} className="p-3 border rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm">{post.body}</p>
          </div>
        ))}

        {loading && <p className="text-center">⏳ Loading...</p>}
      </div>
    </div>
  );
}
