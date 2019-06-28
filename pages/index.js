import React, { useEffect } from "react";
import withData from "../lib/apollo.js";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Grid, Numbers, Insights, Contact } from "../lib/layout";
import styled, { createGlobalStyle } from "styled-components";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import NumbersComponent from "../components/Numbers";
import InsightsComponent from "../components/Insights";
import Fonts from "../components/Fonts";
import Person from "../components/Person/";
import Jobs from "../components/Jobs/";

const GlobalStyles = createGlobalStyle`
         .k-pdf-export .noExport {
        display: none;
      } 
      a {
        text-decoration: none; 
        color: ${props => props.theme.strongRedAccent};
      }
`;

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

const StyledContact = styled.div`
  margin: 10px;
`;

const Title = styled.p`
  font-family: Montserrat;
  background-color: ${props => props.theme.purpleAccent};
  border-radius: 4px;
  padding: 5px;
  font-weight: bold;
`;

const Button = styled.button`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 0.5em 1.5em;
  font-size: 1rem;
  margin-right: 5px;
  background-color: ${props => props.theme.purpleAccent};
  box-shadow: 1px 1px;
  transition: 0.3s;

  &:hover {
    background-color: ${props => props.theme.greyAccent};
    cursor: pointer;
    box-shadow: 2px 2px;
  }
`;

export default withData(props => {
  let pdfExportComponent;
  const exportPDF = () => pdfExportComponent.save();

  useEffect(() => {
    Fonts();
  }, []);

  const ContactComponent = () => (
    <Contact>
      <StyledContact>
        <Title>Get in touch</Title>
        Want to work together and make something cool?
        <br />
        <br />
        Shoot me an email: <a href="mailto:sam@shbgm.ca">sam[at]shbgm.ca</a>
        <br />
        <br />
        <Button className="noExport" onClick={exportPDF}>
          Download this page as a PDF{" "}
        </Button>
      </StyledContact>
    </Contact>
  );
  return (
    <>
      <GlobalStyles />
      <PDFExport
        ref={component => {
          return (pdfExportComponent = component);
        }}
        margin="2cm"
        author="Sam Morrison"
        fileName="Morrison-Samuel-Resume.pdf"
        title="Samuel Morrison - Resume"
      >
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
          <Query query={insightsQuery}>
            {({ data }) => {
              return (
                <Insights>
                  <InsightsComponent insights={data ? data.insights : []} />
                </Insights>
              );
            }}
          </Query>
          <Jobs />
          <ContactComponent />
        </Grid>
      </PDFExport>
    </>
  );
});
