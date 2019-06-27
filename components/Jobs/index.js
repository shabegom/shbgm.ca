import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { Experience } from "../../lib/layout";

import ExperienceComponent from "./Experience";
import HighlightsComponent from "./Highlights";

const jobQuery = gql`
  {
    jobs {
      sys {
        id
      }
      fields {
        company
        yearStarted
        role
        description
        highlight {
          sys {
            id
          }
        }
      }
    }
  }
`;

const highlightQuery = gql`
  {
    highlights {
      sys {
        id
      }
      fields {
        title
        detail
        job {
          sys {
            id
          }
        }
      }
    }
  }
`;

export default () => (
  <Query query={jobQuery}>
    {({ data }) => (
      <Query query={highlightQuery}>
        {({ loading, data: highlightData }) => {
          if (!loading && data && highlightData) {
            return (
              <Experience>
                <ExperienceComponent jobs={data.jobs ? data.jobs : []}>
                  <HighlightsComponent
                    highlights={
                      highlightData.highlights ? highlightData.highlights : []
                    }
                  />
                </ExperienceComponent>
              </Experience>
            );
          }
          return null;
        }}
      </Query>
    )}
  </Query>
);
