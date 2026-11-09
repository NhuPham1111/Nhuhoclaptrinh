import { useState, useEffect, useRef } from "react";
// 1. fetch API, is loading
// 2. Debounce search
// 3. Call API theo Search
// 4. Cancel API ( Abort Controller)
// 5. Race consition (RequestId)

type userType = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

export default function UsersAppFixRaceConditionByRequestID() {
  const [users, setUsers] = useState<userType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const requestIdRef = useRef(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        requestIdRef.current += 1;
        const requestId = requestIdRef.current;
        const url = "https://jsonplaceholder.typicode.com/users";

        const res = await fetch(url);
        const data = await res.json();

        if (requestId === requestIdRef.current) {
          setUsers(data);
        }
      } catch (err) {
        console.error(err);
        console.log("Error fetch users data");
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [search]);

  const keyWord = debouncedSearch.toLowerCase();
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(keyWord) ||
      user.email.toLowerCase().includes(keyWord) ||
      user.address.city.toLowerCase().includes(keyWord)
    );
  });

  const highLight = (text: string) => {
    const keyWordIndex = text.toLowerCase().indexOf(keyWord);

    if (keyWordIndex === -1 || !keyWord) return text;
    return (
      <>
        {/* text[0...............keyWordIndex..............text.lenth] */}

        {text.slice(0, keyWordIndex)}
        <span className="bg-yellow-200">
          {text.slice(keyWordIndex, keyWordIndex + keyWord.length)}
        </span>
        {text.slice(keyWordIndex + keyWord.length)}
      </>
    );
  };

  return (
    <>
      <div className=" flex flex-col w-full items-center p-10 border border-gray-300">
        <h2 className="text-lg font-bold pt-2 pb-4">
          2.3 User List (Fetch API + Search + Debounce + API filter + Local
          Filter + Fix race condition by RequestID)
        </h2>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search user name"
            className="ring: outline-none border border-blue-400 p-4 w-[350px]"
          />
        </div>
        <div>
          <h3 className="py-4 font-semibold">1. Hiển thị danh sách users</h3>

          {isLoading && <p>Loading ...</p>}
          {!isLoading && filteredUsers.length === 0 && (
            <p className="text-red-500 p-2">No users found</p>
          )}

          {/* high light search keyWord */}
          <table className="border-2 p-4">
            {!isLoading && filteredUsers.length > 0 && (
              <thead>
                <tr className="bg-blue-300 text-center">
                  <th>User</th>
                  <th>Info</th>
                </tr>
              </thead>
            )}
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="text-sm font-mono">
                  <td className="border p-2">
                    <p>User {user.id} </p>
                  </td>
                  <td className="border p-2">
                    <p>Name:{highLight(user.name)} </p>
                    <p>Email: {highLight(user.email)} </p>
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
