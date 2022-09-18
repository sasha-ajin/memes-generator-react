import React from "react";
import { GeneratorContainer, Container } from "./styles";
import Image from "./components/Image/Image";
import Inputs from "./components/Inputs/Inputs";

const Generator = () => {

  return (
    <GeneratorContainer>
      <Container>
        <Image />
      </Container>
      <Container>
        <Inputs />
      </Container>
    </GeneratorContainer>
  );
};

export default Generator;
