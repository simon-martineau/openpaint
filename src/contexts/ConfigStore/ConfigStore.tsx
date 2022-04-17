import { Reducer } from "react";

// prettier-ignore
type ConfigAction =
  | { type: "new-pensize" }
  | { type: "new-color" }

type ConfigState = {
  penSize: number;
};

const reducer = (prevState: ConfigState, action: ConfigAction): ConfigState => {
  return prevState;
};

// export const DrawingStoreProvider = ({ children }: DrawingStoreProviderProps) => {
//   const [state, dispatch] = useReducer(reducer, defaultDrawingState);

//   return (
//     <DrawingStoreContext.Provider value={{ state, dispatch }}>
//       {children}
//     </DrawingStoreContext.Provider>
//   );
// };

// export const useDrawingStore = () => {
//   return useContext(DrawingStoreContext) as DrawingStore;
// };

export default reducer;
