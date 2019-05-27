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

import NumbersComponent from "../components/Numbers";
import NameComponent from "../components/Name";
import FlairComponent from "../components/Flair";
import HeadlineComponent from "../components/Headline";
import BlurbComponent from "../components/Blurb";
import ExperienceComponent from "../components/Experience";
import InsightsComponent from "../components/Insights";

const GlobalStyle = createGlobalStyle`
        body {
            @import url('https://fonts.googleapis.com/css?family=Montserrat|Poppins|Quicksand:300|Yantramanav:100&display=swap');
            font-family: 'Poppins', sans-serif;
            color: ${props => props.theme.textColor};
            background-color: FFFAE7;
        }
    `;

export default withData(props => (
  <>
    <GlobalStyle />
    <Grid>
      <Name>
        <NameComponent />
        <FlairComponent />
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
));
