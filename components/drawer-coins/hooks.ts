import { useState } from "react";

export const useDrawerCoins = () => {
  const [selected, setSelected] = useState<{ image: string; name: string }>();

  return {
    selected,
    setSelected
  };
};
