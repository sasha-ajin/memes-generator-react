import React, { useState } from "react";
import { ImageContainer, StyledImage, StyledButton } from "./styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MyModalContent from "./components/MyModalContent/MyModalContent";

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
  return (
    <ImageContainer>
      <StyledImage src="https:\/\/i.imgflip.com\/30b1gx.jpg" />
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
          <MyModalContent />
        </Box>
      </Modal>
    </ImageContainer>
  );
};

export default Image;
