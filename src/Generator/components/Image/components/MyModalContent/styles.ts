import styled from "styled-components";
import Button from "@mui/material/Button";

export const MyModalContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GridImages = styled.div`
  width: 90%;
  overflow-y: scroll;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

interface IStyledImg {
  active: boolean;
}

export const StyledImg = styled.img<IStyledImg>`
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.active
      ? "6px 6px 5px 1px rgba(10,88,177,0.88)"
      : "0 2px 6px rgb(18 17 36 / 4%), 0 0 16px rgb(18 17 36 / 8%)"};
  height: 130px;
  width: 130px;
  objectfit: cover;
`;

export const StyledButtonsContainer = styled.div`
  margin-top: 18px;
`;
export const StyledButton = styled(Button)`
  margin-right: 35px !important;
  margin-left: 35px !important;
`;
