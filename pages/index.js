import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import withData from "../lib/apollo.js";
import { Grid, Numbers, Insights } from "../lib/layout";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import NumbersComponent from "../components/Numbers";
import InsightsComponent from "../components/Insights";
import Fonts from "../components/Fonts";
import Person from "../components/Person/";
import Jobs from "../components/Jobs/";

const statsQuery = gql`
  {
    stats {
      sys {
        id
      }
      fields {
        stat
        description
      }
    }
  }
`;

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

export default withData(props => {
  useEffect(() => {
    Fonts();
  }, []);
  return (
    <>
      <Grid>
        <Person />
        <Query query={statsQuery}>
          {({ data }) => {
            return (
              <Numbers>
                <NumbersComponent stats={data ? data.stats : []} />
              </Numbers>
            );
          }}
        </Query>
        <Jobs />
        <Query query={insightsQuery}>
          {({ data }) => {
            return (
              <Insights>
                <InsightsComponent insights={data ? data.insights : []} />
              </Insights>
            );
          }}
        </Query>
      </Grid>
    </>
  );
});
