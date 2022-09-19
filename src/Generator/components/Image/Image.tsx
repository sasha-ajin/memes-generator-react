import React, { useContext, useState } from "react";
import { ImageContainer, StyledImage, StyledButton } from "./styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import MyModalContent from "./components/MyModalContent/MyModalContent";
import { SelectImageContext } from "../../../context/context";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const Image = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const { choosedImage } = useContext(SelectImageContext);
  return (
    <ImageContainer>
      <StyledImage
        src={choosedImage === null ? "/images/empty_image.png" : choosedImage}
      />
      <StyledButton variant="contained" onClick={handleModalOpen}>
        Select Image
      </StyledButton>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MyModalContent modalClose={handleModalClose} />
        </Box>
      </Modal>
    </ImageContainer>
  );
};

export default Image;
