import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import withData from "../lib/apollo.js";
import { Grid, Numbers, Experience, Insights } from "../lib/layout";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import NumbersComponent from "../components/Numbers";
import ExperienceComponent from "../components/Experience";
import InsightsComponent from "../components/Insights";
import Fonts from "../components/Fonts";
import Person from "../components/Person/";

const jobQuery = gql`
  {
    jobs {
      fields {
        company
        yearStarted
        role
        description
      }
    }
  }
`;

const highlightQuery = gql`
  {
    highlights {
      fields {
        title
        detail
      }
    }
  }
`;

const statsQuery = gql`
  {
    stats {
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
        <Query query={jobQuery}>
          {({ data }) => (
            <Query query={highlightQuery}>
              {({ loading: loadingTwo, highlightData }) => {
                return (
                  <Experience>
                    <ExperienceComponent
                      jobs={data ? data.jobs : null}
                      highlights={highlightData ? highlightData.highlights : []}
                    />
                  </Experience>
                );
              }}
            </Query>
          )}
        </Query>
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
