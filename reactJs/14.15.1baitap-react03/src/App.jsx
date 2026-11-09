import { useState } from "react";

//bài tập 03 khoá học react js tại https://tuhoc.cc

export default function App() {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive((prev) => !prev); // Co dinh tham so, true -> false, false -> true
  }

  return (
    <div className="container">
      <p className={isActive ? "Active" : undefined}>Click vào em!</p>
      <button onClick={handleClick}>Toggle btn</button>
    </div>
  );
}
