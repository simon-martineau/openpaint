import { MutableRefObject, useCallback, useEffect } from "react";
import { ConfigState, useConfigStore } from "../../contexts/ConfigStore/ConfigStore";
import { toCanvasCoordinates } from "../../helpers/canvas";
import { buildContextFromConfig } from "../../services/canvas-context-service";
import { useReducerRef } from "../ref";
import useGlobalEventListener from "../use-global-event-listener";

// prettier-ignore
type DrawerAction = 
  | { type: "pen_down" }
  | { type: "pen_up" }
  | { type: "pen_move", x: number, y: number }
  | { type: "draw" }

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
    case "draw":
      return state;
  }
}

type UseDrawerProps = {
  canvasRef: MutableRefObject<HTMLCanvasElement>;
};

const performDraw = (
  canvas: HTMLCanvasElement,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  config: ConfigState
) => {
  // console.log(
  //   `from: [${Math.floor(x1)}, ${Math.floor(y1)}], to: [${Math.floor(x2)}, ${Math.floor(y2)}]`
  // );
  const canvasContext = canvas?.getContext("2d") || null;
  if (canvasContext !== null) {
    const context = buildContextFromConfig(config, canvasContext);
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
    // const toDraw = getImageDataFromPen(canvasContext);
    // canvasContext.putImageData(toDraw, x2, y2);
    return;
  }
};

const useDrawer = ({ canvasRef }: UseDrawerProps) => {
  const [state, dispatch, stateRef] = useReducerRef(reducer, defaultDrawerState);
  const [configState] = useConfigStore();

  const handleMouseUp = useCallback((e: MouseEvent) => {
    dispatch({ type: "pen_up" });
  }, []);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      dispatch({ type: "pen_down" });
      const [x, y] = toCanvasCoordinates(canvasRef.current, e.pageX, e.pageY);
      performDraw(canvasRef.current, stateRef.current.x, stateRef.current.y, x, y, configState);
    },
    [configState]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const [x, y] = toCanvasCoordinates(canvasRef.current, e.pageX, e.pageY);
      if (stateRef.current.isDrawing && canvasRef.current) {
        performDraw(canvasRef.current, stateRef.current.x, stateRef.current.y, x, y, configState);
        dispatch({ type: "draw" });
      }
      if (canvasRef.current) {
        dispatch({ type: "pen_move", x, y });
      }
    },
    [configState]
  );

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      // canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mousedown", handleMouseDown);

      return () => {
        // canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, [handleMouseDown]);

  useGlobalEventListener("mousemove", handleMouseMove);
  useGlobalEventListener("mouseup", handleMouseUp);

  return state;
};

export default useDrawer;
