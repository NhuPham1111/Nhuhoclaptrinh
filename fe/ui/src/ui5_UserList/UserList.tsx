import { useState, useMemo } from "react";
const num = 5;
interface User {
  name: string;
  job: string;
  avatar: string;
  tags: string[];
}

const users: User[] = [
  {
    name: "John Doe",
    job: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    tags: ["Active", "Online"],
  },
  {
    name: "Jane Smith",
    job: "Backend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    tags: ["Active", "Online"],
  },
  {
    name: "Mike Johnson",
    job: "UI Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    tags: ["Inactive", "Offline"],
  },
  {
    name: "Sarah Williams",
    job: "Product Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    tags: ["Active", "Online"],
  },
  {
    name: "David Brown",
    job: "DevOps Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    tags: ["Active", "Offline"],
  },
  {
    name: "Emily Davis",
    job: "QA Tester",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    tags: ["Inactive", "Offline"],
  },
];

export default function UserList() {
  const [query, setQuery] = useState("");
  const FILTERS: string[] = ["All", "Active", "Inactive", "Online", "Offline"];
  // optimite with useMemo, but whenever data >1000 is recommend
  const filteredUser: User[] = useMemo(() => {
    if (query.length === 0) return users;

    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [users, query]);

  return (
    <>
      <h1 className="text-3xl font-serif font-bold text-center">
        UI-5: User List Requirement
      </h1>
      <div className="flex flex-col">
        {/* <img src="/user-list.png" alt="user list" className="w-full" /> */}
        <img src={`/ui${num}.png`} alt="user list" className="w-full" />
      </div>
      <div className="w-full bg-white p-16 grow">
        <h1 className="text-3xl font-black pb-2 font-merri">Users</h1>
        {/* filter area + tags */}
        <div className="flex flex-col mt-6 gap-4 md:flex-row md:justify-between ">
          <div>
            <div className="relative grow rounded-md border-2 border-gray-300">
              <input
                type="text"
                placeholder="Search user"
                className="mr-2 w-full rounded-md px-4 py-3 pl-10"
                onChange={(e) => setQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute left-3 p-1 top-2.5 h-6 w-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>

          <div className=" space-x-2">
            {FILTERS.map((filter) => (
              <a
                className=" mb-2 inline-block cursor-pointer rounded-lg bg-white px-3 py-3 hover:bg-purple-300 hover:text-white"
                id={filter}
                key={filter}
              >
                {filter}
              </a>
            ))}
          </div>
        </div>
        {/* users cards */}
        <div className="grid grid-cols-1 mt-8 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredUser.map((user) => (
            <div
              key={user.name}
              className="flex p-6 bg-blend-color bg-blue-50  hover:shadow-lg hover:border-1 hover:border-grey-300 hover:bg-blue-100 gap-x-4xl rounded-lg"
            >
              <img
                className="h-24 w-24 rounded-full"
                src={user.avatar}
                alt="avartar"
              />
              <div>
                <h3 className="font-merri font-bold">{user.name}</h3>
                <p className="font-poppin text-sm">{user.job}</p>
                <div className="mt-4 space-x-2">
                  {user.tags.map((tag) => (
                    <span className="inline-block rounded-full px-1 py-1 p-1 text-xs text-violet-600 border border-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
