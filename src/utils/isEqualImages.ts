import { Image } from "types/Image";

export const isEqualImages = (img1: Image | null, img2: Image | null) => {
  if (
    img1?.box_count !== img2?.box_count ||
    img1?.height !== img2?.height ||
    img1?.id !== img2?.id ||
    img1?.name !== img2?.name ||
    img1?.url !== img2?.url ||
    img1?.width !== img2?.width
  )
    return false;
  return true;
};
