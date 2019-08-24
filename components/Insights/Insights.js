import React from "react";
import styled from "styled-components";

const StyledInsight = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const StyledInsightTitle = styled.div`
  background-color: ${props => props.theme.accentColorTwo};
  border-radius: 4px;
  padding: 5px;
`;

const StyledInsightItem = styled.div`
  font-size: 1rem;
  margin: 5px;
  padding: 5px;
`;

const StyledInsightItemBlurb = styled.div`
  font-size: 0.8rem;
`;

const StyledInsightItemHed = styled.div`
  font-family: "Montserrat", sans-serif;
`;

const InsightTitle = ({ title }) => (
  <StyledInsightTitle>{title}</StyledInsightTitle>
);
const InsightItems = ({ point, pointDescription }) =>
  pointDescription.map((item, i) => (
    <StyledInsightItem key={i + Math.random()}>
      {point && <StyledInsightItemHed>{point[i]}</StyledInsightItemHed>}
      <StyledInsightItemBlurb>{item}</StyledInsightItemBlurb>
    </StyledInsightItem>
  ));

const Insight = ({ title, point, pointDescription }) => (
  <StyledInsight key={Math.random()}>
    {title && <InsightTitle title={title} />}
    <InsightItems point={point} pointDescription={pointDescription} />
  </StyledInsight>
);

export default ({ insights }) => {
  if (insights) {
    return <>{insights.map(insight => Insight(insight.fields))}</>;
  }
  return null;
};
