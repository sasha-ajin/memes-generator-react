import { createContext } from "react";
import { Image } from "types/Image";

type SelectImageContextContent = {
  selectedImage: Image | null;
  setSelectedImage: (c: Image | null) => void;
};

export const SelectImageContext = createContext<SelectImageContextContent>({
  selectedImage: null,
  setSelectedImage: () => {},
});
