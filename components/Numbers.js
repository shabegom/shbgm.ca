import React from "react";
import styled from "styled-components";

const StyledNumbers = styled.div`
  font-size: 0.8rem;
  padding: 5px;
  margin-bottom: 5px;
  display: grid;
  border: 0.5px solid ${props => props.theme.purpleAccent};
  border-radius: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

const StyledNumber = styled.span`
  padding-left: 5px;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Poppins";
  color: ${props => props.theme.redAccent};
  @media only screen and (min-width: 600px) {
    font-size: 0.8rem;
  }
`;

const StyledDetail = styled.span`
  font-family: "Montserrat", sans-serif;
`;

const Number = ({ number, detail }) => (
  <div>
    <StyledNumber>{number}</StyledNumber> <StyledDetail>{detail}</StyledDetail>
  </div>
);

export default ({ stats }) => (
  <StyledNumbers>
    {stats.map(stat => (
      <Number number={stat.fields.stat} detail={stat.fields.description} />
    ))}
  </StyledNumbers>
);
