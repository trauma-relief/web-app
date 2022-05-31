import React, { useState } from "react";
import styled from "styled-components";

import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import devices from "../../styles/Devices";

const DirectoryPage = () => {
  return (
    <>
      <StyledPage>
        <Banner />
        <StyledContent>
          <Sidebar />
          <StyledMainArea>Test</StyledMainArea>
        </StyledContent>
      </StyledPage>
    </>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  flex-direction: column;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 24px;
  background-color: inherit;
  max-width: 960px;
  width: 100%;
  align-self: center;
  padding-top: 40px;
`;

const StyledMainArea = styled.div`
  grid-column: col-start 5 / span 8;

  @media (max-width: ${devices.ipad}) {
    grid-row: 2;
    grid-column: col-start 1 / span 12;
  }
`;

export default DirectoryPage;