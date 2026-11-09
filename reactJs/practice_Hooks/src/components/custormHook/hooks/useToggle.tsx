import { useState } from "react";

export function useToggle(init: boolean) {
  const [isOpen, setIsopen] = useState(init);
  const toggle = () => {
    setIsopen((prev) => !prev);
  };
  const open = () => {
    setIsopen(true);
  };
  const close = () => {
    setIsopen(false);
  };
  // return[isOpen, toggle] as const;
  return { isOpen, toggle, open, close };
}
