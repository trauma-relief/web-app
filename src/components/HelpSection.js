import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Routes } from "../App.js";

const HelpSection = () => {
  return (
    <StyledSection>
      <CardWrapper>
        <Card
          title="I’m looking for help"
          text="Lorem lobortis aliquam leo nisi vitae egestas elit. Tellus ultrices et velit luctus. "
          path={Routes.HELP}
        />
        <Card
          title="I’d like to help"
          text="Lorem lobortis aliquam leo nisi vitae egestas elit. Tellus ultrices et velit luctus. "
          path={Routes.HOME}
        />
      </CardWrapper>
    </StyledSection>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const StyledSection = styled.section`
  background: #fafafa;
  margin: 0;
  padding: 0;
  min-height: 10%;
`;

export default HelpSection;
