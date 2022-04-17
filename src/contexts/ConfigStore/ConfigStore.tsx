import Color from "color";
import React, { createContext, useContext, useReducer } from "react";
import { ParentComponentProps } from "../../types";

// prettier-ignore
type ConfigAction =
  | { type: "set-pensize", size: number }
  | { type: "set-color", color: Color }

type ConfigState = {
  penSize: number;
  color: Color;
};

const defaultConfigState: ConfigState = {
  penSize: 3,
  color: Color("#1d1c1c"),
};

const reducer = (state: ConfigState, action: ConfigAction): ConfigState => {
  switch (action.type) {
    case "set-pensize":
      return { ...state, penSize: action.size };
    case "set-color":
      return { ...state, color: action.color };
  }
};

type ConfigStore = {
  state: ConfigState;
  dispatch: React.Dispatch<ConfigAction>;
};

const defaultConfigStore: ConfigStore = {
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

export const useConfigStore = () => {
  return useContext(ConfigStoreContext) as ConfigStore;
};

export default reducer;
