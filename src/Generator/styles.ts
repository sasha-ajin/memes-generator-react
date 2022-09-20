import styled from "styled-components";
import { device } from "device";

export const GeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
    margin-top: 20px;
  }
`;
export const Container = styled.div`
  width: 100%;
  @media ${device.laptop} {
    width: 50%;
  }
`;
