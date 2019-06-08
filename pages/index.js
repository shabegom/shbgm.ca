import React from "react";
import { createGlobalStyle } from "styled-components";
import withData from "../lib/apollo.js";
import {
  Grid,
  Numbers,
  Name,
  Headline,
  Blurb,
  Experience,
  Insights,
  Tagline
} from "../lib/layout";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import NumbersComponent from "../components/Numbers";
import NameComponent from "../components/Name";
import FlairComponent from "../components/Flair";
import HeadlineComponent from "../components/Headline";
import BlurbComponent from "../components/Blurb";
import ExperienceComponent from "../components/Experience";
import InsightsComponent from "../components/Insights";

const personQuery = gql`
  query {
    people {
      fields {
        name
        headline
        flair
        description
      }
    }
  }
`;

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

export default withData(props => (
  <>
    <Grid>
      <Query query={personQuery}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <img
                style={{ margin: "10%", width: "80%", height: "auto" }}
                src="https://media.giphy.com/media/17dYuJvJX5P8s/giphy.gif"
              />
            );
          if (error) return `Something Appears to be wrong!`;
          if (!loading && !error && data.people) {
            let person = data.people[0].fields;
            let first = person.name.split(" ")[0];
            let last = person.name.split(" ")[1];
            return (
              <>
                <Name>
                  <NameComponent first={first} last={last} />
                  <FlairComponent flair={person.flair} />
                </Name>
                <Headline>
                  <HeadlineComponent headline={person.headline} />
                </Headline>
                <Blurb>
                  <BlurbComponent description={person.description} />
                </Blurb>
              </>
            );
          }
        }}
      </Query>
      <Query query={statsQuery}>
        {({ loading, data }) => {
          return (
            <Numbers>
              <NumbersComponent stats={data ? data.stats : null} />
            </Numbers>
          );
        }}
      </Query>
      <Query query={jobQuery}>
        {({ loading: loadingOne, data }) => (
          <Query query={highlightQuery}>
            {({ loading: loadingTwo, highlightData }) => {
              if (loadingOne || loadingTwo) return <span>loading...</span>;
              return (
                <Experience>
                  <ExperienceComponent
                    jobs={data ? data.jobs : null}
                    highlights={highlightData ? highlightData.highlights : null}
                  />
                </Experience>
              );
            }}
          </Query>
        )}
      </Query>
      <Query query={insightsQuery}>
        {({ loading, data }) => {
          return (
            <Insights>
              <InsightsComponent insights={data ? data.insights : null} />
            </Insights>
          );
        }}
      </Query>
    </Grid>
  </>
));
