import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { Experience } from "../../lib/layout";

import ExperienceComponent from "./Experience";
import HighlightsComponent from "./Highlights";

const jobQuery = gql`
  {
    jobs {
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
      }
    }
  }
`;

export default () => (
  <Query query={jobQuery}>
    {({ data: { jobs } }) => (
      <Query query={highlightQuery}>
        {({ loading, data: { highlights } }) => {
          if (!loading) {
            return (
              <Experience>
                <ExperienceComponent jobs={jobs ? jobs : []} />
                <HighlightsComponent
                  highlights={highlights ? highlights : []}
                  jobId={
                    jobs
                      ? jobs.map(job =>
                          job.fields.highlight.map(
                            highlight => highlight.sys.id
                          )
                        )
                      : []
                  }
                />
              </Experience>
            );
          }
          return null;
        }}
      </Query>
    )}
  </Query>
);
