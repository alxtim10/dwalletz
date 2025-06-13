"use client";
import { Provider } from "react-redux";
import { cryptoStore, AppStore } from "../stores/store";
import { useRef } from "react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = cryptoStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
