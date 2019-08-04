import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.div`
  background-color: ${props => props.theme.accentColorOne};
  font-family: "Quicksand", sans-serif;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-align: center;
  color: ${props => props.theme.altTextColor};
  @media only screen and (min-width: 600px) {
    font-size: 1.4rem;
  }
`;

export default ({ headline }) => <StyledHeadline>{headline}</StyledHeadline>;
