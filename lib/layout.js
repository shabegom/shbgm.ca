import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  border: 1px solid red;
  backgroundcolor: "#f5f5f5";
  width: "210mm";
  minHeight: '297mm',
        marginLeft: 'auto',
        marginRight: 'auto'
  @media only screen and (min-width: 600px) {
    grid-template-columns: 0.25fr 1fr 1fr 0.25fr;
    grid-template-rows: 0.25fr, 1fr 1fr 1fr 0.25fr;
    grid-template-areas:
      ". name name ."
      ". headline numbers ."
      ". blurb work ."
      ". insights work ."
      ". footer footer .";
  }
  @media only screen and (min-width: 900px) {
    grid-template-columns: 0.25fr 1fr 1fr 0.25fr;
    grid-template-rows: 0.25fr, 1fr 1fr 1fr 0.25fr;
    grid-template-areas:
      ". name headline ."
      ". blurb numbers ."
      ". insights work ."
      ". insights work ."
      ". footer footer .";
  }
`;

export const Numbers = styled.div`
  border: 2px solid blue;
  @media only screen and (min-width: 600px) {
   grid-area: numbers;
`;

export const Name = styled.div`
  border: 2px solid green;
  @media only screen and (min-width: 600px) {
    grid-area: name;
  }
`;

export const Headline = styled.div`
  border: 2px solid purple;
  @media only screen and (min-width: 600px) {
    grid-area: headline;
  }
`;

export const Blurb = styled.div`
  border: 2px solid yellow;
  @media only screen and (min-width: 600px) {
    grid-area: blurb;
  }
`;

export const Experience = styled.div`
  border: 2px solid black;
  @media only screen and (min-width: 600px) {
    grid-area: work;
  }
`;

export const Insights = styled.div`
  border: 2px solid magenta;
  @media only screen and (min-width: 600px) {
    grid-area: insights;
  }
`;
