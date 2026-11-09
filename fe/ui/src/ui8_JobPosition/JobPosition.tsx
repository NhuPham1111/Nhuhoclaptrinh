import type { ReactNode } from "react";

interface Position {
  title: string;
  openPosition: number;
  icon: ReactNode;
  bgGradiant: string;
}

const positions: Position[] = [
  {
    title: "Frontend Developer",
    openPosition: 5,
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 3h18v18H3z" />
      </svg>
    ),
    bgGradiant: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    title: "Backend Developer",
    openPosition: 3,
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    ),
    bgGradiant: "bg-gradient-to-r from-purple-400 to-purple-600",
  },
  {
    title: "UI/UX Designer",
    openPosition: 2,
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    bgGradiant: "bg-gradient-to-r from-pink-400 to-pink-600",
  },
  {
    title: "DevOps Engineer",
    openPosition: 4,
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
    bgGradiant: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    title: "Data Scientist",
    openPosition: 6,
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    ),
    bgGradiant: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
  {
    title: "QA Engineer",
    openPosition: 3,
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
    bgGradiant: "bg-gradient-to-r from-red-400 to-red-600",
  },
];
export default function JobPosition() {
  const num = 8;
  return (
    <>
      <h1 className="text-3xl font-serif font-bold text-center">
        UI-8: Job Position
      </h1>
      <div className="flex flex-col">
        <img src={`/ui${num}.png`} alt="notification" className="w-full" />
      </div>
      <div className=" w-full mt-6 space-y-24 bg-blue-100 p-16 text-center ">
        <h1 className="font-merri text-3xl font-black">Open Position</h1>
        <div className="grid grid-cols-3 gap-8 px-4">
          {positions.map((position) => (
            <div className="flex flex-col space-y-8 bg-white px-10 py-12 rounded-2xl shadow-md">
              <div className="flex items-center justify-center space-x-4">
                <div
                  className={`flex items-center justify-center size-16 rounded-2xl ${position.bgGradiant} `}
                >
                  {position.icon}
                </div>
                <p>{position.title}</p>
              </div>
              <button className="border-[1px] px-6 py-4 text-lg hover:bg-[#1e2246] rounded-md hover:text-white">
                {position.openPosition} open positions
              </button>
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-3xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nam,
          quas atque error ullam quo sequi earum vero vel, eveniet nesciunt
          voluptatum accusantium quos, ex at temporibus repellendus. Quidem,
          aliquam.
        </p>
      </div>
    </>
  );
}
