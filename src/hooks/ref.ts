import {
  MutableRefObject,
  Reducer,
  ReducerAction,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

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

const useStateRef = <T>(intialValue: T): [T, (arg0: T) => void, MutableRefObject<T>] => {
  const [value, setValue] = useState(intialValue);
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return [value, setValue, ref];
};

export { useStateRef, useReducerRef };
