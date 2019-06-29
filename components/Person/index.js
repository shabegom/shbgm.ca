import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const personQuery = gql`
  query {
    people {
      fields {
        name
        flair
        headline
        description
      }
    }
  }
`;

import { Name, Tagline, Headline, Blurb } from "../../lib/layout";

import NameComponent from "./Name";
import FlairComponent from "./Flair";
import HeadlineComponent from "./Headline";
import BlurbComponent from "./Blurb";

export default () => (
  <Query query={personQuery}>
    {({ data }) => {
      if (data && data.people) {
        let person = data.people[0].fields;
        let first = person.name.split(" ")[0];
        let last = person.name.split(" ")[1];
        return (
          <>
            <Name>
              <NameComponent
                first={first ? first : ""}
                last={last ? last : ""}
              />
              <FlairComponent flair={person.flair ? person.flair : ""} />
            </Name>
            <Headline>
              <HeadlineComponent
                headline={person.headline ? person.headline : ""}
              />
            </Headline>
            <Blurb>
              <BlurbComponent
                description={person.description ? person.description : ""}
              />
            </Blurb>
          </>
        );
      }
      return null;
    }}
  </Query>
);
