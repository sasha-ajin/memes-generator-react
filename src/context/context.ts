import { createContext } from "react";
import { Image } from "types/Image";

type SelectImageContextContent = {
  choosedImage: Image | null;
  setChoosedImage: (c: Image | null) => void;
};

export const SelectImageContext = createContext<SelectImageContextContent>({
  choosedImage: null,
  setChoosedImage: () => {},
});
