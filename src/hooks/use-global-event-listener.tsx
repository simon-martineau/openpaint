import { useEffect } from "react";

const useGlobalEventListener = <K extends keyof WindowEventMap>(
  type: K,
  callback: (ev: WindowEventMap[K]) => any
) => {
  useEffect(() => {
    console.log("Registered global event");
    window.addEventListener(type, callback);

    return () => {
      window.removeEventListener(type, callback);
    };
  }, [callback]);
};

export default useGlobalEventListener;
