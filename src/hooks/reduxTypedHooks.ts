import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { TypedUseSelectorHook } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector