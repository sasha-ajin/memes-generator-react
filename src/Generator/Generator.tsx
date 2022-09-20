import React, { useState } from "react";
import { GeneratorContainer, Container } from "./styles";
import Image from "./components/Image/Image";
import Inputs from "./components/Inputs/Inputs";
import { SelectImageContext } from "context/context";
import { Image as ImageType } from "types/Image";

const Generator = () => {
  const [choosedImage, setChoosedImage] = useState<ImageType | null>(null);
  return (
    <SelectImageContext.Provider
      value={{
        choosedImage,
        setChoosedImage,
      }}
    >
      <GeneratorContainer>
        <Container>
          <Image />
        </Container>
        <Container>
          <Inputs quantity={choosedImage ? choosedImage?.box_count : 0} />
        </Container>
      </GeneratorContainer>
    </SelectImageContext.Provider>
  );
};

export default Generator;
