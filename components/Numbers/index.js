import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { Numbers } from "../../lib/layout";
import NumbersComponent from "./Numbers";

const statsQuery = gql`
  {
    stats {
      fields {
        stat
        description
        order
      }
    }
  }
`;

export default () => (
  <Query query={statsQuery}>
    {({ data }) => {
      return (
        <Numbers>
          <NumbersComponent stats={data ? data.stats : []} />
        </Numbers>
      );
    }}
  </Query>
);
