import React, { useState, useRef } from "react";
import { GeneratorContainer, Container } from "./styles";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import InputsContainer from "./components/InputsContainer/InputsContainer";
import { SelectImageContext } from "context/context";
import { Image as ImageType } from "types/Image";
import { Box as BoxType } from "types/Box";
import { exportComponentAsJPEG } from "react-component-export-image";

const Generator: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [textBoxes, setTextBoxes] = useState<BoxType[] | null>(null);
  const installImageRef = useRef<HTMLDivElement | null>(null);
  const saveMeme = () => exportComponentAsJPEG(installImageRef);
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
          <ImageContainer divRef={installImageRef} />
        </Container>
        <Container>
          <InputsContainer saveMeme={saveMeme} />
        </Container>
      </GeneratorContainer>
      <button onClick={() => saveMeme()}></button>
    </SelectImageContext.Provider>
  );
};

export default Generator;
