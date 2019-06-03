import React from "react";
import styled from "styled-components";

const data = [
  {
    title: "3 prerequisites for success",
    items: [
      {
        hed: "Support",
        blurb:
          "The right support up front and throughout will increase success tremendously."
      },
      {
        hed: "Alignment",
        blurb:
          "Ensure everyone is moving in the same direction. Continuously work towards alignment."
      },
      {
        hed: "Safety",
        blurb:
          "People need to feel safe to speak up if we aren't doing the right thing."
      }
    ]
  },
  {
    title: "3 things people want in their work",
    items: [
      {
        hed: "Autonomy",
        blurb:
          "Give people the opportunity to own what they are working and they will work harder."
      },
      {
        hed: "Mastery",
        blurb:
          "Not only the ability to gain mastery over a subject, but to be constantly challenged to grow in one's mastery."
      },
      {
        hed: "Purpose",
        blurb:
          "Connect the work people are doing to the value it is creating. Show the impact they are having on the user."
      }
    ]
  }
];

const InsightTitle = ({ title }) => (
  <StyledInsightTitle>{title}</StyledInsightTitle>
);
const InsightItems = ({ items }) =>
  items.map(item => (
    <StyledInsightItem>
      <StyledInsightItemHed>{item.hed}</StyledInsightItemHed>
      <StyledInsightItemBlurb>{item.blurb}</StyledInsightItemBlurb>
    </StyledInsightItem>
  ));

const Insight = ({ title, items }) => (
  <StyledInsight>
    <InsightTitle title={title} />
    <InsightItems items={items} />
  </StyledInsight>
);

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

export default ({ insights }) => {
  if (insights) {
    return <>{data.map(insight => Insight(insight))}</>;
  }
};
