import styled from "styled-components";

interface IGridImages {
  height?: string;
  scroll: boolean;
}
export const GridImages = styled.div<IGridImages>`
  width: 90%;
  overflow-y: ${(props) => (props.scroll ? "auto" : "visible")};
  height: ${(props) => (props.height ? props.height : "100%")};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
`;

interface IStyledImg {
  active?: boolean;
  height: string;
  width: string;
}

export const StyledImg = styled.img<IStyledImg>`
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.active
      ? "6px 6px 5px 1px rgba(10,88,177,0.88)"
      : "0 2px 6px rgb(18 17 36 / 4%), 0 0 16px rgb(18 17 36 / 8%)"};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  objectfit: cover;
`;
