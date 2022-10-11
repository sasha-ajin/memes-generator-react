import { createContext } from "react";
import { Image } from "types/Image";
import { Box } from "types/Box";

type SelectImageContextContent = {
  selectedImage: Image | null;
  setSelectedImage: (image: Image | null) => void;
  textBoxes: Box[] | null;
  setTextBoxes: (box: Box[] | null) => void;
};

export const SelectImageContext = createContext<SelectImageContextContent>({
  selectedImage: null,
  setSelectedImage: () => {},
  textBoxes: null,
  setTextBoxes: () => {},
});
