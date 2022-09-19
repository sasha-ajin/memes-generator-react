import { createContext } from "react";

type SelectImageContextContent = {
  choosedImage: null | string;
  setChoosedImage: (c: string | null) => void;
};

export const SelectImageContext = createContext<SelectImageContextContent>({
  choosedImage: null,
  setChoosedImage: () => {},
});
