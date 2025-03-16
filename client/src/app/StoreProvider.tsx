"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "./lib/store";
//import { initializeCount } from '../lib/features/counter/counterSlice'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    //    storeRef.current.dispatch(initializeCount(count))
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
