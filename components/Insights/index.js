import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { Insights } from "../../lib/layout";
import InsightsComponent from "./Insights";

const insightsQuery = gql`
  {
    insights {
      fields {
        title
        point
        pointDescription
      }
    }
  }
`;

export default () => (
  <Query query={insightsQuery}>
    {({ data }) => {
      return (
        <Insights>
          <InsightsComponent insights={data ? data.insights : []} />
        </Insights>
      );
    }}
  </Query>
);
