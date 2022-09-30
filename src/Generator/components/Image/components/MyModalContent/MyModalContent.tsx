import React, { useState, useEffect, useContext } from "react";
import ImageService from "api/ImageService";
import {
  MyModalContentContainer,
  StyledButton,
  StyledButtonsContainer,
} from "./styles";
import { StyledImg, GridImages } from "styles";
import Typography from "@mui/material/Typography";
import { SelectImageContext } from "context/context";
import { Image } from "types/Image";
import { isEqualImages } from "utils/isEqualImages";
import { ImageCreateBody } from "types/ImageCreateBody";
import { Box } from "types/Box";

type MyModalContentProps = {
  modalClose: () => any;
};

const MyModalContent: React.FC<MyModalContentProps> = (props) => {
  const [images, setImages] = useState<Image[] | null>(null);
  const { selectedImage, setSelectedImage, setTextBoxes } =
    useContext(SelectImageContext);
  const [activeImage, setActiveImage] = useState<Image | null>(selectedImage);
  const fetchImages = async () => {
    const response = await ImageService.getAll();
    setImages(response);
  };
  const submit = async () => {
    props.modalClose();
    setSelectedImage(activeImage);
    var textBoxesVar: Box[] = [];
    for (let i = 0; i < (activeImage ? activeImage?.box_count : 0); i++) {
      textBoxesVar.push({
        text: "",
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        color: "#ffffff",
        fontWeight: 20,
        colorOutlined: "#ffffff",
        outlineWeight: 1,
      });
    }
    setTextBoxes(textBoxesVar);
  };
  // const createImg = async () => {
  //   const response = await ImageService.create({
  //     template_id: "181913649",
  //     username: "sashaajin",
  //     password: "ffiiffssaarrll22",
  //     font: "arial",
  //     boxes: [
  //       {
  //         text: "One does not simply",
  //         x: 10,
  //         y: 10,
  //         width: 548,
  //         height: 100,
  //         color: "#ffffff",
  //       },
  //       {
  //         text: "Make custom memes on the web via imgflip API",
  //         x: 10,
  //         y: 225,
  //         width: 548,
  //         height: 100,
  //         color: "#ffffff",
  //       },
  //     ],
  //   });
  //   console.log(response);
  // };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <MyModalContentContainer>
      <Typography variant="h3" gutterBottom>
        Select Image
      </Typography>
      {images && (
        <GridImages height="300px" scroll={true}>
          {images.map((image) => (
            <StyledImg
              height="130px"
              width="130px"
              active={activeImage?.url === image.url ? true : false}
              key={image.id}
              src={image.url}
              onClick={() => setActiveImage(image)}
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
          disabled={isEqualImages(activeImage, selectedImage) ? true : false}
          onClick={submit}
        >
          Select
        </StyledButton>
        {/* <button onClick={() => createImg()}>sssss</button> */}
      </StyledButtonsContainer>
    </MyModalContentContainer>
  );
};

export default MyModalContent;
