import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  @media only screen and (min-width: 600px) {
    grid-template-columns: 0.2fr 1fr 1fr 1.5fr 0.2fr;
    grid-template-rows: 0.2fr, 1fr 1fr 0.2fr;
    grid-template-areas:
      ". name name headline ."
      ". blurb blurb numbers ."
      ". blurb blurb  . ."
      ". insights work work ."
      ". footer footer footer .";
  }
`;

export const Numbers = styled.div`
  @media only screen and (min-width: 600px) {
    grid-area: numbers;
  }
`;

export const Name = styled.div`
  @media only screen and (min-width: 600px) {
    grid-area: name;
  }
`;

export const Headline = styled.div`
  align-self: center;
  justify-self: stretch;
  @media only screen and (min-width: 600px) {
    grid-area: headline;
  }
`;

export const Blurb = styled.div`
  @media only screen and (min-width: 600px) {
    grid-area: blurb;
  }
`;

export const Experience = styled.div`
  @media only screen and (min-width: 600px) {
    grid-area: work;
  }
`;

export const Insights = styled.div`
  @media only screen and (min-width: 600px) {
    grid-area: insights;
  }
`;
