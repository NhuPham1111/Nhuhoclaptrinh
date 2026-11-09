//way 1: useRef (common)
import { useRef, useEffect } from "react";

export default function usePrevious<T>(value: T) {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  // eslint-disable-next-line react-compiler/react-compiler
  return ref.current;
}

//way2
// import { useEffect, useState } from "react";

// export default function usePrevious<T>(value: T) {
//   const [prev, setPrev] = useState<T | undefined>(undefined);

//   useEffect(() => {
//     setPrev(value);
//   }, [value]);

//   return prev;
// }

// way 3
// import { useState } from "react";
/**
 * @deprecated See alternatives from https://react.dev/reference/react/useState#storing-information-from-previous-renders
 */

// export default function usePrevious<Value>(value: Value) {
//   const [prevTrackedVal, setPrevTrackedVal] = useState<Value | undefined>();
//   const [prevVal, setPrevVal] = useState<Value | undefined>();

//   if (value !== prevTrackedVal) {
//     setPrevTrackedVal(value);
//     setPrevVal(prevTrackedVal);
//   }

//   return prevVal;
// }
