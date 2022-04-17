import { useEffect } from "react";

const useGlobalEventListener = <K extends keyof DocumentEventMap>(
  type: K,
  callback: (ev: DocumentEventMap[K]) => any
) => {
  useEffect(() => {
    console.log("Registered global event");
    document.addEventListener(type, callback);

    return () => {
      document.removeEventListener(type, callback);
    };
  }, [callback]);
};

export default useGlobalEventListener;
