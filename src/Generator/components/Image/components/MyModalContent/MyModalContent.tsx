import React, { useState, useEffect } from "react";
import ImageService from "./../../../../../api/ImageService";
import {
  MyModalContentContainer,
  StyledButton,
  StyledImg,
  GridImages,
  StyledButtonsContainer,
} from "./styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

type Image = [
  {
    box_count: number;
    height: number;
    id: string;
    name: string;
    url: string;
    width: number;
  }
];

const MyModalContent = () => {
  const [images, setImages] = useState<Image | null>(null);
  async function fetchVehicles() {
    const response = await ImageService.getAll();
    setImages(response);
  }

  useEffect(() => {
    fetchVehicles();
  }, []);
  images && console.log(images[0].url);
  return (
    <MyModalContentContainer>
      <Typography variant="h3" gutterBottom>
        Select Image
      </Typography>
      {images && (
        <GridImages>
          {images.map((image) => (
            <StyledImg key={image.id} src={image.url} />
          ))}
        </GridImages>
      )}
      <StyledButtonsContainer>
        <StyledButton size="large" variant="outlined">
          Cancel
        </StyledButton>
        <StyledButton size="large" variant="contained">
          Select
        </StyledButton>
      </StyledButtonsContainer>
    </MyModalContentContainer>
  );
};

export default MyModalContent;
