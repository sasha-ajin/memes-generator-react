import React, { useState, useEffect } from "react";
import ImageService from "./../../../../../api/ImageService";

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
  return (
    <div>
      djksjdskjksjskjd
      {images != null && <img src={images[0].url} />}
      <button onClick={() => console.log(images)}></button>
    </div>
  );
};

export default MyModalContent;
