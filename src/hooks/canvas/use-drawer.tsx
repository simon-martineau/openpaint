import { MutableRefObject, useCallback, useEffect, useReducer, useRef } from "react";
import { toCanvasCoordinates } from "../../helpers/canvas";
import { getImageDataFromPen } from "../../services/pen-service";
import { useReducerRef } from "../ref";
import useGlobalEventListener from "../use-global-event-listener";

// prettier-ignore
type DrawerAction = 
  | { type: "pen_down" }
  | { type: "pen_up" }
  | { type: "pen_move", x: number, y: number };

interface DrawerState {
  isDrawing: boolean;
  lastX: number;
  lastY: number;
  x: number;
  y: number;
}

const defaultDrawerState: DrawerState = {
  isDrawing: false,
  lastX: 0,
  lastY: 0,
  x: 0,
  y: 0,
};

function reducer(state: DrawerState, action: DrawerAction): DrawerState {
  const type = action.type;

  switch (type) {
    case "pen_down":
      return { ...state, isDrawing: true };
    case "pen_up":
      return { ...state, isDrawing: false };
    case "pen_move":
      const { x, y } = action;
      return { isDrawing: state.isDrawing, lastX: state.x, lastY: state.y, x, y };
  }
}

type UseDrawerProps = {
  canvasRef: MutableRefObject<HTMLCanvasElement>;
};

const performDraw = (canvas: HTMLCanvasElement, x1: number, y1: number, x2: number, y2: number) => {
  console.log("perform draw");
  const canvasContext = canvas?.getContext("2d") || null;
  if (canvasContext !== null) {
    console.log("canvas context is not null");
    const toDraw = getImageDataFromPen(canvasContext);
    canvasContext.putImageData(toDraw, x2, y2);
  }
};

const useDrawer = ({ canvasRef }: UseDrawerProps) => {
  const [state, dispatch, stateRef] = useReducerRef(reducer, defaultDrawerState);

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      dispatch({ type: "pen_up" });
    },
    [stateRef]
  );

  const handleMouseDown = useCallback((e: MouseEvent) => {
    dispatch({ type: "pen_down" });
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (stateRef.current.isDrawing && canvasRef.current) {
        performDraw(
          canvasRef.current,
          stateRef.current.lastX,
          stateRef.current.lastY,
          stateRef.current.x,
          stateRef.current.y
        );
      }
      if (canvasRef.current) {
        const [x, y] = toCanvasCoordinates(canvasRef.current, e.pageX, e.pageY);
        dispatch({ type: "pen_move", x: x, y: y });
      }
    },
    [stateRef]
  );

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mousedown", handleMouseDown);

      return () => {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, []);

  useGlobalEventListener("mouseup", handleMouseUp);

  return state;
};

export default useDrawer;
