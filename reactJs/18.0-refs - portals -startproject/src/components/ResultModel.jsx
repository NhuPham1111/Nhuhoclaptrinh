import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModel({
  targetTime,
  ref,
  remainingTime,
  onReset,
}) {
  const userLost = remainingTime <= 0;
  const formatteRemainingTime = (remainingTime / 1000).toFixed(2);
  const dialogInside = useRef();
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogInside.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialogInside} className="result-modal">
      {/* <h2>You {result} </h2> */}
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score is {score}</h2>}
      <p>
        Thời gian đích: <strong>{targetTime}</strong>
      </p>
      <p>
        Bạn còn <strong>{formatteRemainingTime} second</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
