import React from "react";
import styled from "styled-components";
import { order } from "../../lib/utils";

const StyledHighlightTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  background-color: ${props => props.theme.accentColorTwo};
  border-radius: 4px;
  padding: 5px;
`;

const StyledHighlightItems = styled.ul`
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 0.8rem;
`;

const HighlightTitle = ({ title }) => (
  <StyledHighlightTitle>{title}</StyledHighlightTitle>
);

const HighlightItems = ({ order, items }) => (
  <>{items.map(item => <li key={order + Math.random()}>{item}</li>)}</>
);

const Highlight = ({ title, detail, order }) => {
  return (
    <div key={order + Math.random()}>
      <HighlightTitle title={title} />
      <StyledHighlightItems>
        <HighlightItems order={order} items={detail ? detail : []} />
      </StyledHighlightItems>
    </div>
  );
};

export default ({ highlights, jobId }) =>
  highlights
    .filter(highlight => highlight && highlight.fields.job.sys.id === jobId)
    .sort(order)
    .map(highlight => highlight && Highlight(highlight.fields));
