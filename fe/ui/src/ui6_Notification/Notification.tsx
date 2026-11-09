import { useState } from "react";
export default function Notification() {
  const num = 6;
  const [show, setShow] = useState(false);
  return (
    <>
      <h1 className="text-3xl font-serif font-bold text-center">
        UI-6: Notification
      </h1>
      <div className="flex flex-col">
        <img src={`/ui${num}.png`} alt="notification" className="w-full" />
      </div>
      <div className="w-[44rem] mt-8">
        <div className="text-right">
          <button
            className="rounded-full bg-blue-950 text-white p-4"
            onClick={() => setShow(!show)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h10 w-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </button>
        </div>
        <div
          className={`mt-6 w-full bg-white p-10 rounded-2xl shadow-sm transition-all duration-300
            ${show ? "opacity-100" : "opacity-0"} `}
        >
          <h2 className="font-poppin text-xl font-bold">
            You have 1 new message
          </h2>
          <div className="flex mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20 float-left bg-red-100 p-2 rounded-lg stroke-1 stroke-pink-700 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <div className="flex flex-col justify-center space-y-2">
              <h4 className="font-poppin text-lg font-bold">Feb 22</h4>
              <p className="font-poppin text-lg ">
                If you like what we do, please tell your friends and share
              </p>
            </div>
          </div>
          <div className="flex mt-6 items-center justify-center space-x-3">
            <button className="max-w-fit h-10 inline-flex justify-center items-center border-1 font-poppin font-bold text-blue-500 border-blue-500 text-sm rounded-full p-2">
              <svg
                className="w-6 h-6 mr-2  text-gray-800 dark:text-white stroke-blue-400 fill-none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              Twiter
            </button>
            <button className="max-w-fit h-10 inline-flex justify-center items-center border-1 font-poppin font-bold text-blue-800 border-blue-500 text-sm rounded-full p-2">
              <svg
                className="w-6 h-6 mr-2  text-gray-800 dark:text-white stroke-blue-800 fill-none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
