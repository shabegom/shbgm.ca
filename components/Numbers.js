import React from "react";
import styled from "styled-components";

const StyledNumbers = styled.div``;

const StyledNumber = styled.span``;

const StyledDetail = styled.span``;

const Number = ({ number, detail }) => (
  <>
    <StyledNumber>{number}</StyledNumber> <StyledDetail>{detail}</StyledDetail>
  </>
);

export default () => (
  <>
    <StyledNumbers>
      <Number number="10" detail="Teams Built" />
      <Number number="10" detail="Teams Built" />
      <Number number="10" detail="Teams Built" />
      <Number number="10" detail="Teams Built" />
    </StyledNumbers>
  </>
);
