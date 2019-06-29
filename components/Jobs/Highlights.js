import React from "react";
import styled from "styled-components";
import { order } from "../../lib/utils";

const HighlightTitle = ({ title }) => (
  <StyledHighlightTitle>{title}</StyledHighlightTitle>
);

const StyledHighlightTitle = styled.div`
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

const Highlight = ({ title, detail }) => {
  return (
    <>
      <HighlightTitle title={title} />
      <StyledHighlightItems>
        <HighlightItems items={detail ? detail : []} />
      </StyledHighlightItems>
    </>
  );
};

const HighlightItems = ({ items }) => <>{items.map(item => <li>{item}</li>)}</>;

export default ({ highlights, jobId }) =>
  highlights
    .filter(highlight => highlight.fields.job.sys.id === jobId)
    .sort(order)
    .map(highlight => {
      return Highlight(highlight.fields);
    });
