import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

const nameQuery = gql`
  query {
    hello
  }
`;

const StyledName = styled.div`
  font-size: 2rem;
  font-family: "Quicksand", sans-serif;
  @media only screen and (min-width: 600px) {
    font-size: 3rem;
  }
`;

const StyledSam = styled.span``;
const StyledMorrison = styled.span`
  font-family: "Montserrat", serif;
  color: ${props => props.theme.strongRedAccent};
`;

export default function Name() {
  return (
    <Query query={nameQuery}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        if (!loading && !error) {
          return (
            <StyledName>
              <StyledSam>{data.hello}</StyledSam>{" "}
              <StyledMorrison>Morrison</StyledMorrison>
            </StyledName>
          );
        }
        return null;
      }}
    </Query>
  );
}
