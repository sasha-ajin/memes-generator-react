import { Box } from "types/Box";

export type ImageCreateBody = {
  template_id: string;
  username: string;
  password: string;
  font: string;
  max_font_size?: string;
  boxes: Box[];
};
