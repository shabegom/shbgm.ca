import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.div`
  font-family: "Quicksand", sans-serif;
  background-color: ${props => props.theme.redAccent};
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-align: center;
  color: ${props => props.theme.altTextColor};
  @media only screen and (min-width: 600px) {
    font-size: 1.4rem;
  }
`;

export default () => <StyledHeadline>I Build Great Teams</StyledHeadline>;
