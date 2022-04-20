import {
  MutableRefObject,
  Reducer,
  ReducerAction,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

/**
 * This hook can be used to enbable acessing a reducer state while in an event callback that is not handled by
 * React, such as setTimeout, setInterval or global event listeners.
 */
const useReducerRef = <S, A>(
  reducer: Reducer<S, A>,
  initialValue: S
): [S, (arg0: ReducerAction<Reducer<S, A>>) => void, MutableRefObject<S>] => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const ref = useRef(state);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return [state, dispatch, ref];
};

/**
 * This hook can be used to enbable acessing a state while in an event callback that is not handled by
 * React, such as setTimeout, setInterval or global event listeners.
 */
const useStateRef = <T>(intialValue: T): [T, (arg0: T) => void, MutableRefObject<T>] => {
  const [value, setValue] = useState(intialValue);
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return [value, setValue, ref];
};

export { useStateRef, useReducerRef };
