import { createContext } from "react";

export type SelectImageContextContent = {
  choosedImage: null | string;
  setChoosedImage: React.Dispatch<React.SetStateAction<null>> | null;
};

export const SelectImageContext = createContext<SelectImageContextContent>({
  choosedImage: null,
  setChoosedImage: null,
});
