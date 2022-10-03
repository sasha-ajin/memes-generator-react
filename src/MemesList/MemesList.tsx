import React, { useState, useEffect } from "react";
import { Image } from "types/Image";
import ImageService from "api/ImageService";
import { StyledImg, GridImages } from "styles";
import { MemesListContainer } from "./styles";

const MemesList: React.FC = () => {
  const [images, setImages] = useState<Image[] | null>(null);
  const fetchImages = async () => {
    const response = await ImageService.getAll();
    setImages(response);
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <MemesListContainer>
      {images && (
        <GridImages scroll={false}>
          {images.map((image) => (
            <StyledImg
              key={image.id}
              src={image.url}
              height="300px"
              width="300px"
            />
          ))}
        </GridImages>
      )}
    </MemesListContainer>
  );
};

export default MemesList;
