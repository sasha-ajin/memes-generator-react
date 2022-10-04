import React, { useContext, useState } from "react";
import {
  ImageContainer,
  StyledImage,
  StyledButton,
  StyledImageContainer,
  TextBox,
} from "./styles";
import Modal from "@mui/material/Modal";
import MyModalContent from "./components/ModalContent/ModalContent";
import { SelectImageContext } from "context/context";

type ImageProp = {
  divRef: any;
};

const Image: React.FC<ImageProp> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const { selectedImage, textBoxes } = useContext(SelectImageContext);
  const emptyImage = "/images/empty_image.png";
  return (
    <ImageContainer>
      <StyledImageContainer ref={props.divRef}>
        {textBoxes &&
          textBoxes.map((textBox, index) => (
            <TextBox
              key={index}
              x={textBox.x}
              y={textBox.y}
              fontWeight={textBox.fontWeight}
              color={textBox.color}
              colorOutlined={textBox.colorOutlined}
              outlineWeight={textBox.outlineWeight}
            >
              {textBox.text}
            </TextBox>
          ))}
        <StyledImage
          src={selectedImage === null ? emptyImage : selectedImage.url}
        />
      </StyledImageContainer>
      <StyledButton variant="contained" onClick={handleModalOpen}>
        Select Image
      </StyledButton>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MyModalContent modalClose={handleModalClose} />
      </Modal>
    </ImageContainer>
  );
};

export default Image;
