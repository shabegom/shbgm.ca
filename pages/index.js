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

const nameQuery = gql`
  query {
    people {
      fields {
        name
        flair
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
        body {
            @import url('https://fonts.googleapis.com/css?family=Montserrat|Poppins|Quicksand:300|Yantramanav:100&display=swap');
            font-family: 'Poppins', sans-serif;
            color: #070707;
            background-color: FFFAE7;
        }
    `;

export default withData(props => (
  <Query query={nameQuery}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      if (!loading && !error && data.people) {
        let person = data.people[0].fields;
        let first = person.name.split(" ")[0];
        let last = person.name.split(" ")[1];
        return (
          <>
            <GlobalStyle />
            <Grid>
              <Name>
                <NameComponent first={first} last={last} />
                <FlairComponent flair={person.flair} />
              </Name>
              <Headline>
                <HeadlineComponent />
              </Headline>
              <Numbers>
                <NumbersComponent />
              </Numbers>
              <Blurb>
                <BlurbComponent />
              </Blurb>
              <Experience>
                <ExperienceComponent />
              </Experience>
              <Insights>
                <InsightsComponent />
              </Insights>
            </Grid>
          </>
        );
      }
    }}
  </Query>
));
