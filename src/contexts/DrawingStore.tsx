import { createContext, useContext, useReducer } from "react";

// prettier-ignore
type DrawingAction = 
  | { type: "pen_down" }
  | { type: "pen_up" }
  | { type: "pen_move", x: number, y: number };

interface DrawingState {
  isDrawing: boolean;
  lastX: number;
  lastY: number;
  x: number;
  y: number;
}

export type DrawingStoreDispatch = (action: DrawingAction) => void;

export type DrawingStore = {
  state: DrawingState;
  dispatch: DrawingStoreDispatch;
};

const defaultDrawingState: DrawingState = {
  isDrawing: false,
  lastX: 0,
  lastY: 0,
  x: 0,
  y: 0,
};

const defaultDrawingStore: DrawingStore = {
  state: defaultDrawingState,
  dispatch: () => {},
};

const DrawingStoreContext = createContext<DrawingStore>(defaultDrawingStore);

type DrawingStoreProviderProps = {
  children: React.ReactNode;
};

function reducer(state: DrawingState, action: DrawingAction): DrawingState {
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

export const DrawingStoreProvider = ({ children }: DrawingStoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaultDrawingState);

  return (
    <DrawingStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawingStoreContext.Provider>
  );
};

export const useDrawingStore = () => {
  return useContext(DrawingStoreContext) as DrawingStore;
};
