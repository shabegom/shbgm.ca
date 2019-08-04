import React from "react";
import styled from "styled-components";

const StyledTagline = styled.div`
  font-size: 0.6rem;
  font-family: "Yantramanav"
  margin-left: 4px;
  @media only screen and (min-width: 600px) {
    font-size: .8rem;
  }
`;

export default ({ flair }) => <StyledTagline>{flair}</StyledTagline>;
