import { useHotkeys } from "react-hotkeys-hook";
import { useEventDispatch } from "../EventBus";

const useKeyboardShortcuts = () => {
  const dispatchEvent = useEventDispatch();

  useHotkeys("ctrl+z", () => dispatchEvent("undo", {}));
  useHotkeys("ctrl+shift+z", () => dispatchEvent("redo", {}));
};

export default useKeyboardShortcuts;
