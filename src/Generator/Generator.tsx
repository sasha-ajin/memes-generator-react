import React, { useState } from "react";
import { GeneratorContainer, Container } from "./styles";
import Image from "./components/Image/Image";
import Inputs from "./components/Inputs/Inputs";
import { SelectImageContext } from "../context/context";

const Generator = () => {
  const [choosedImage, setChoosedImage] = useState(null);
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
          <Inputs />
        </Container>
      </GeneratorContainer>
    </SelectImageContext.Provider>
  );
};

export default Generator;
