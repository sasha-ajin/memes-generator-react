import React, { useState, useEffect } from "react";
import ImageService from "./../../../../../api/ImageService";
import { MyModalContentContainer, StyledButton } from "./styles";
import Typography from "@mui/material/Typography";

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
  console.log(images);
  return (
    <MyModalContentContainer>
      <Typography variant="h3" gutterBottom>
        Select Image
      </Typography>
      <div>
        <StyledButton size="large" variant="outlined">
          Cancel
        </StyledButton>
        <StyledButton size="large" variant="contained">
          Select
        </StyledButton>
      </div>
    </MyModalContentContainer>
  );
};

export default MyModalContent;
