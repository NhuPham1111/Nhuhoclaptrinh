import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Hello !");
  function updateGreeting() {
    // setGreeting("New Hello !");
    const currentHour = new Date().getHours();
    if (setGreeting >= 5 && currentHour < 12) {
      setGreeting("Good morning !");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon !");
    } else {
      setGreeting("Good everning !");
    }
  }

  return (
    <>
      <p>{greeting}</p>
      <button onClick={updateGreeting}>Update say hi!</button>
    </>
  );
}

export default App;
