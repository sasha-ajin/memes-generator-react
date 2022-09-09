import React from "react";
import { GeneratorContainer, ImageContainer, InputsContainer } from "./styles";
import Image from "./components/Image/Image";
import Inputs from "./components/Inputs/Inputs";

const Generator = () => {
  return (
    <GeneratorContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <InputsContainer>
        <Inputs />
      </InputsContainer>
    </GeneratorContainer>
  );
};

export default Generator;
