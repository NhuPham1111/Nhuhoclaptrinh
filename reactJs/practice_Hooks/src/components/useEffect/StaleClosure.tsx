import { useState, useEffect, useRef } from "react";
type User = {
  id: number;
  name: string;
};

export default function StaleClosure() {
  //   -------------------Bai 1----------------------------
  const [seconds, setSeconds] = useState(0);
  //   const timeRef = useRef(seconds);
  //   -------------------Bai 2----------------------------
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const requestIdRef = useRef(0);
  //   -------------------Bai 3----------------------------
  const [count, setCount] = useState(0);
  //   -------------------Bai 1----------------------------
  //Cach 1: Dependency
  //   const id = useEffect(() => {
  //     setInterval(() => {
  //       setSeconds(seconds + 1);
  //     }, 1000);
  //    return () => clearInterval(id);
  //   }, [seconds]);

  //Cach 2: UseRef
  //   useEffect(() => {
  //     timeRef.current = seconds;
  //   }, [seconds]);

  //   useEffect(() => {
  //     const time = setInterval(() => {
  //       setSeconds(timeRef.current + 1);
  //     }, 1000);
  //     return () => clearInterval(time);
  //   }, []);

  //Cach 3: functional update
  useEffect(() => {
    const time = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(time);
  }, []);

  //   -------------------Bai 2----------------------------

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      requestIdRef.current += 1;
      const requestId = requestIdRef.current;

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?name_like=${search}`,
      );
      const data = await res.json();
      if (requestId === requestIdRef.current) {
        setUsers(data);
        setIsLoading(false);
      }
    };
    const timeout = setTimeout(fetchUsers, 500);
    return () => clearTimeout(timeout);
  }, [search]);

  //   -------------------Bai 3----------------------------
  useEffect(() => {
    const handleKey = () => {
      setCount((prev) => prev + 1);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [count]); // ❌

  return (
    <div className=" flex flex-col w-full items-center p-10 border border-gray-300">
      <div className="grid grid-cols-3">
        <div>
          <h2 className="text-xl font-bold pt-4 pb-2">
            Bai 1: Fix bằng 2 cách: dependency, useRef va functional update
          </h2>
          <h1> Timer: {seconds}</h1>
        </div>
        <div>
          <h2 className="text-xl font-bold pt-4 pb-2">Bai 2: Fix bug real</h2>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search user"
            />

            {isLoading && <p>Loading...</p>}

            {users.map((u) => (
              <p key={u.id}>{u.name}</p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold pt-4 pb-2">
            Bai 3: Fix bug Stale Closure + Event Listener
          </h2>
          <h3>Key pressed: {count}</h3>
        </div>
      </div>
    </div>
  );
}
