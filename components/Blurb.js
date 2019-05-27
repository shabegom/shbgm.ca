import React from "react";
import styled from "styled-components";

const StyledBlurb = styled.div`
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 0.8rem;
`;

export default () => (
  <StyledBlurb>
    A great team is <strong>high performing and innovative</strong>; creating{" "}
    <strong>maximum value</strong> while having a great time. I'll build{" "}
    <strong>aligned, empowered and self-directed teams</strong> to achieve{" "}
    <strong>success</strong> and a true <strong>competitive advantage</strong>.
    I'll work to maximize team productivity by{" "}
    <strong>leading teams to greatness</strong> with a wide toolset of
    management practices, processes and <i>magic tricks</i>.
  </StyledBlurb>
);
