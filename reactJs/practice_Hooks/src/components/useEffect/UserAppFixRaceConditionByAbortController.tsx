import React, { useState, useEffect } from "react";

// 1. fetch API
// 2. Debounce search
// 3. Call API theo Search
// 4. Cancel API ( Abort Controller)

type userType = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

export default function UserAppFixRaceConditionByAbortController() {
  const [users, setUsers] = useState<userType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // 4. Cancel API ( Abort Controller)
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const url = !debouncedSearch.trim()
          ? "https://jsonplaceholder.typicode.com/users"
          : `https://jsonplaceholder.typicode.com/users?name_like=${debouncedSearch}`;
        const res = await fetch(url, { signal });
        const data = await res.json();
        if (!signal.aborted) {
          setUsers(data);
        }
      } catch (err: any) {
        if (err.name === "AbortError") return;
        console.error(err);
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };
    fetchUsers();
    return () => controller.abort();
  }, [debouncedSearch]);

  // 2. Debounce search
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [search]);

  // High light text === key word which user searching
  const keyWord = debouncedSearch.trim().toLowerCase();
  const highLight = (text: string) => {
    const lowerText = text.toLowerCase();
    const index = lowerText.indexOf(keyWord);
    if (!keyWord || index === -1) return text;
    return (
      <>
        {text.slice(0, index)}
        <span className="bg-green-300">
          {text.slice(index, index + keyWord.length)}
        </span>
        {text.slice(index + keyWord.length)}
      </>
    );
  };

  const filteredUsers = users.filter((user) => {
    //Search nâng cao nhieu fields
    return (
      user.name.toLowerCase().includes(keyWord) ||
      user.email.toLowerCase().includes(keyWord) ||
      user.address.city.toLowerCase().includes(keyWord)
    );
  });

  return (
    <>
      <div className=" flex flex-col w-full items-center p-10 border border-gray-300">
        <h2 className="text-lg font-bold pt-2 pb-4">
          2.2 User List (Fetch API + Search + Debounce + API filter + Local
          Filter + Cancel ongoing request by AbortController (Fix race
          condition))
        </h2>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Search user name"
            className="ring: outline-none border border-blue-400 p-4 w-[350px]"
          />
        </div>
        <div>
          <h3 className="py-4 font-semibold">1. Hiển thị danh sách users</h3>
          {isLoading && <p>Loading... </p>}
          {!isLoading && filteredUsers.length === 0 && (
            <p className="text-red-500">No users found</p>
          )}

          {/* high light search keyWord */}
          <table className="border-2 p-4">
            <thead>
              <tr className="bg-blue-300 text-center">
                <th>User</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="text-sm font-mono">
                  <td className="border p-2">
                    <p>User {user.id}</p>
                  </td>
                  <td className="border p-2">
                    <p>Name: {highLight(user.name)}</p>
                    <p>Email: {highLight(user.email)}</p>
                    <p>City: {highLight(user.address.city)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
