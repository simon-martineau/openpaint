import { RefObject } from "react";
import useGlobalEventListener from "./use-global-event-listener";

type Handler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler
): void {
  useGlobalEventListener("mousedown", (event) => {
    const element = ref?.current;

    if (!element || element.contains(event.target as Node)) {
      return;
    }

    handler(event);
  });
}

export default useOnClickOutside;
