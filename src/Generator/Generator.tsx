import React, { useState } from "react";
import { GeneratorContainer, Container } from "./styles";
import Image from "./components/Image/Image";
import Inputs from "./components/Inputs/Inputs";
import { SelectImageContext } from "context/context";
import { Image as ImageType } from "types/Image";
import { Box as BoxType } from "types/Box";

const Generator = () => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [textBoxes, setTextBoxes] = useState<BoxType[] | null>(null);
  return (
    <SelectImageContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        textBoxes,
        setTextBoxes,
      }}
    >
      <GeneratorContainer>
        <Container>
          <Image />
        </Container>
        <Container>
          <Inputs quantity={selectedImage ? selectedImage?.box_count : 0} />
        </Container>
      </GeneratorContainer>
    </SelectImageContext.Provider>
  );
};

export default Generator;
