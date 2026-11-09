import { useEffect, useState } from "react";

export default function UseEffectPractice() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(clock);
  }, [isRunning]);
  const formattedHour = String(time.getHours()).padStart(2, "0");
  const formattedMinute = String(time.getMinutes()).padStart(2, "0");
  const formattedSecond = String(time.getSeconds()).padStart(2, "0");

  return (
    <>
      <h2 className="text-lg font-bold pt-2">1.⏰ Realtime Clock</h2>

      <div className=" flex flex-col items-center justify-center p-10 border border-gray-300">
        <div className="text-left pt-4">
          <p className="pt-2 text-center border border-blue-300 py-2 px-4 mb-4 text-xl font-mono mb-4">
            {formattedHour}:{formattedMinute}:{formattedSecond}{" "}
            {time.getHours() >= 12 ? "PM" : "AM"}
          </p>
          <button
            className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition mr-2"
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>
          <button
            className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 transition"
            onClick={() => setIsRunning(true)}
          >
            Resume
          </button>
        </div>
      </div>
    </>
  );
}
