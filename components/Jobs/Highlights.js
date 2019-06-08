import React from "react";
import styled from "styled-components";

const HighlightTitle = ({ title }) => (
  <StyledHighlightTitle>{title}</StyledHighlightTitle>
);

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

const Highlight = (id, { title, detail }) => {
  return (
    <>
      <h3>
        <HighlightTitle title={title} />
      </h3>
      <StyledHighlightItems>
        <HighlightItems id={id++} items={detail ? detail : []} />
      </StyledHighlightItems>
    </>
  );
};

const HighlightItems = ({ id, items }) => (
  <>{items.map(item => <li key={id}>{item}</li>)}</>
);

export default ({ highlights, jobId }) => {
  let filteredHighlights = highlights.filter(highlight =>
    jobId.map(id => id.join("") === highlight.sys.id)
  );
  let i = 0;
  return filteredHighlights.map(highlight => {
    i++;
    return Highlight(i, highlight.fields);
  });
};
