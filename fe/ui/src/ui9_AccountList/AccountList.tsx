export default function AccountList() {
  const num = 9;
  return (
    <>
      <h1 className="text-3xl font-serif font-bold text-center">
        UI-9: Account List
      </h1>
      <div className="flex flex-col">
        <img src={`/ui${num}.png`} alt="notification" className="w-full" />
      </div>
      <div className=" w-full mt-6 space-y-24 bg-white p-16 text-center ">
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
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
            <button className="bg-violet-400 size-18 text-white rounded-full p-4">
              IG
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
