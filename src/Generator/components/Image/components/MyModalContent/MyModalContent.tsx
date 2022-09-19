import React, { useState, useEffect, useContext } from "react";
import ImageService from "./../../../../../api/ImageService";
import {
  MyModalContentContainer,
  StyledButton,
  StyledImg,
  GridImages,
  StyledButtonsContainer,
} from "./styles";
import Typography from "@mui/material/Typography";
import { SelectImageContext } from "../../../../../context/context";

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

type MyModalContentProps = {
  modalClose: () => any;
};

const MyModalContent: React.FC<MyModalContentProps> = (props) => {
  const [images, setImages] = useState<Image | null>(null);
  const { choosedImage, setChoosedImage } = useContext(SelectImageContext);
  const [activeImage, setActiveImage] = useState<string | null>(choosedImage);
  const fetchVehicles = async () => {
    const response = await ImageService.getAll();
    setImages(response);
  };
  const submit = async () => {
    props.modalClose();
    setChoosedImage(activeImage);
  };
  useEffect(() => {
    fetchVehicles();
  }, []);
  return (
    <MyModalContentContainer>
      <Typography variant="h3" gutterBottom>
        Select Image
      </Typography>
      {images && (
        <GridImages>
          {images.map((image) => (
            <StyledImg
              active={activeImage === image.url ? true : false}
              key={image.id}
              src={image.url}
              onClick={() => setActiveImage(image.url)}
            />
          ))}
        </GridImages>
      )}
      <StyledButtonsContainer>
        <StyledButton
          size="large"
          variant="outlined"
          onClick={props.modalClose}
        >
          Cancel
        </StyledButton>
        <StyledButton
          size="large"
          variant="contained"
          disabled={activeImage === choosedImage ? true : false}
          onClick={submit}
        >
          Select
        </StyledButton>
      </StyledButtonsContainer>
    </MyModalContentContainer>
  );
};

export default MyModalContent;
