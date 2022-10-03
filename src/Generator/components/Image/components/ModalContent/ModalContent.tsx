import React, { useState, useEffect, useContext } from "react";
import ImageService from "api/ImageService";
import {
  ModalContentContainer,
  StyledButton,
  StyledButtonsContainer,
} from "./styles";
import { StyledImg, GridImages } from "styles";
import Typography from "@mui/material/Typography";
import { SelectImageContext } from "context/context";
import { Image } from "types/Image";
import { isEqualImages } from "utils/isEqualImages";
// import { ImageCreateBody } from "types/ImageCreateBody";
import { Box as BoxType } from "types/Box";
import Box from "@mui/material/Box";

type ModalContentProps = {
  modalClose: () => any;
};
const initialTextBox: BoxType = {
  text: "",
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  color: "#ffffff",
  fontWeight: 38,
  colorOutlined: "#000000",
  outlineWeight: 1,
};

const style = {
  // position: "absolute" as "absolute",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const ModalContent: React.FC<ModalContentProps> = (props) => {
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
    var textBoxesVar: BoxType[] = [];
    for (let i = 0; i < (activeImage ? activeImage?.box_count : 0); i++) {
      textBoxesVar.push({ ...initialTextBox });
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
    <Box sx={style}>
      <ModalContentContainer>
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
      </ModalContentContainer>
    </Box>
  );
};

export default ModalContent;
