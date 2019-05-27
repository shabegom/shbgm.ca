import React from "react";
import styled from "styled-components";

const StyledName = styled.div`
  font-size: 2rem;
  font-family: "Quicksand", sans-serif;
  @media only screen and (min-width: 600px) {
    font-size: 3rem;
  }
`;

const StyledSam = styled.span``;
const StyledMorrison = styled.span`
  font-family: "Montserrat", serif;
  color: ${props => props.theme.strongRedAccent};
`;

export default () => (
  <StyledName>
    <StyledSam>Samuel</StyledSam> <StyledMorrison>Morrison</StyledMorrison>
  </StyledName>
);
