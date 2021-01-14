import styled from "styled-components";
import colours from "./Colours";
import devices from "./Devices";

export const ResponsiveStyledHeader = styled.h2`
  @media (max-width: ${devices.mobile}) {
    display: ${(props) => (props.mobile ? "block" : "none")};
    position: absolute;
    width: 50%;
    bottom: 0;
    right: ${(props) => (props.isLeft ? "50%" : "0")};
    font-weight: 900;
    font-size: 30px;
  }
  display: ${(props) => (props.mobile ? "none" : "block")};
  font-family: Playfair Display;
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  color: ${colours.black};
`;

export const StyledParagraph = styled.p`
  position: relative;
  margin: 0;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${colours.black};
  z-index: 1;
`;

export const StyledSection = styled.section`
  background: ${colours.white};
  margin: 0;
  padding: 0 3rem;
  max-width: 100%;

  @media (max-width: ${devices.mobile}) {
    padding: 0;
    margin-top: ${(props) => (props.padded ? "5rem" : "0")};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
  }
`;

export const ReversableFlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  width: 50%;
  @media (max-width: ${devices.ipad}) {
    width: 60%;
  }
  @media (max-width: ${devices.mobile}) {
    width: 100%;
  }
`;
