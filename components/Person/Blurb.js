import React from "react";
import styled from "styled-components";

const StyledBlurb = styled.div`
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 0.8rem;
`;

export default ({ description }) => (
  <>
    <StyledBlurb>{description}</StyledBlurb>
  </>
);
