import React from "react";
import styled from "styled-components";
import devices from "../styles/Devices";
import ExperiencesSection from "../components/resultsPage/ExperiencesSection";
import ResultsSection from "../components/resultsPage/ResultsSection";
import UsefulTipsSection from "../components/resultsPage/UsefulTipsSection";

const ResultsPage = () => {
  return (
    <StyledPage>
      <div style={{ width: "100%" }}>
        <ExperiencesSection />
        <ResultsSection />
        <UsefulTipsSection />
      </div>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${devices.mobile}) {
    flex-direction: column;
    padding: 5%;
  }
`;

export default ResultsPage;
