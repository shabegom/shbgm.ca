import React from "react";
import styled from "styled-components";

const StyledInsight = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const StyledInsightTitle = styled.div`
  font-size: 1rem;
  background-color: ${props => props.theme.purpleAccent};
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
  font-size: 0.9rem;
  font-weight: bold;
`;

const InsightTitle = ({ title }) => (
  <StyledInsightTitle>{title}</StyledInsightTitle>
);
const InsightItems = ({ point, pointDescription }) =>
  point.map((item, i) => (
    <StyledInsightItem>
      <StyledInsightItemHed>{item}</StyledInsightItemHed>
      <StyledInsightItemBlurb>{pointDescription[i]}</StyledInsightItemBlurb>
    </StyledInsightItem>
  ));

const Insight = ({ title, point, pointDescription }) => (
  <StyledInsight>
    <InsightTitle title={title} />
    <InsightItems point={point} pointDescription={pointDescription} />
  </StyledInsight>
);

export default ({ insights }) => {
  if (insights) {
    return <>{insights.map(insight => Insight(insight.fields))}</>;
  }
  return null;
};
