import React from "react";
import styled from "styled-components";

const HighlightTitle = ({ title }) => (
  <StyledHighlightTitle>{title}</StyledHighlightTitle>
);

const HighlightItems = ({ items }) => <>{items.map(item => <li>{item}</li>)}</>;

const StyledHighlightTitle = styled.div`
  margin-bottom: -10px;
  font-family: "Quicksand";
  font-size: 0.9rem;
  background-color: ${props => props.theme.greyAccent};
  border-radius: 4px;
  padding: 5px;
`;

const StyledHighlightItems = styled.ul`
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 0.7rem;
`;

const Highlight = ({ title, items }) => (
  <>
    <h3>
      <HighlightTitle title={title} />
    </h3>
    <StyledHighlightItems>
      <HighlightItems items={items} />
    </StyledHighlightItems>
  </>
);

export default ({ highlights }) => (
  <>{highlights.map(highlight => Highlight(highlight))}</>
);
