import React from "react";
import { ImageContainer, StyledImage, StyledButton } from "./styles";

const Image = () => {
  return (
    <ImageContainer>
      <StyledImage src="https://www.meme-arsenal.com/memes/2c7646b0a38fb67e48bf9a87fab5bf00.jpg" />
      <StyledButton variant="contained">Select Image</StyledButton>
    </ImageContainer>
  );
};

export default Image;
