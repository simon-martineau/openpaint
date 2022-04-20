import Color from "color";
import React, { createContext, useContext, useReducer } from "react";
import { ParentComponentProps } from "../../types";

export type Tool = "pen" | "brush" | "fill" | "eraser";

// prettier-ignore
export type ConfigAction =
  | { type: "set-tool", tool: Tool}
  | { type: "set-pensize", size: number }
  | { type: "set-color", color: Color }

export type ConfigState = {
  penSize: number;
  color: Color;
  tool: Tool;
};

const defaultConfigState: ConfigState = {
  penSize: 3,
  color: Color("#c92424"),
  tool: "pen",
};

const reducer = (state: ConfigState, action: ConfigAction): ConfigState => {
  switch (action.type) {
    case "set-pensize":
      return { ...state, penSize: action.size };
    case "set-color":
      return { ...state, color: action.color };
    case "set-tool":
      return { ...state, tool: action.tool };
  }
};

export type ConfigStore = {
  state: ConfigState;
  dispatch: React.Dispatch<ConfigAction>;
};

export const defaultConfigStore: ConfigStore = {
  state: defaultConfigState,
  dispatch: () => {},
};

const ConfigStoreContext = createContext<ConfigStore>(defaultConfigStore);

export const ConfigStoreProvider = ({ children }: ParentComponentProps) => {
  const [state, dispatch] = useReducer(reducer, defaultConfigState);

  return (
    <ConfigStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </ConfigStoreContext.Provider>
  );
};

export const useConfigStore = (): [ConfigState, React.Dispatch<ConfigAction>] => {
  const store = useContext(ConfigStoreContext);
  return [store.state, store.dispatch];
};

export default ConfigStoreProvider;
