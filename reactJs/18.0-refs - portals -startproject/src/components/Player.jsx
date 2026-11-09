import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [enteredPlayer, setEnteredPlayer] = useState("");
  //   const [submitted, setSubmitted] = useState(false);

  //   function handleChange(e) {
  //     setSubmitted(false);
  //     setEnteredPlayer(e.target.value);
  //   }

  function handleClick() {
    // setSubmitted(true);
    setEnteredPlayer(playerName.current.value);
  }

  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredPlayer : "Noname"}</h2> */}
      <h2>Welcome {enteredPlayer ? enteredPlayer : "Noname"}</h2>
      <div>
        {/* <input type="text" value={enteredPlayer} onChange={handleChange} /> */}
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </div>
    </section>
  );
}
