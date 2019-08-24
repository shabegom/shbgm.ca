import React from "react";
import styled from "styled-components";
import { order } from "../../lib/utils";

import Highlights from "./Highlights";

const StyledName = styled.div`
  font-size: 1.3rem;
  font-family: "Montserrat", sans-serif;
  background-color: ${props => props.theme.accentColorFour};
  border-radius: 2px 2px 0px 0px;
  padding-top: 5px;
  padding-left: 10px;
`;

const StyledYear = styled.div`
  font-size: 0.8rem;
  margin-bottom: 10px;
  background-color: ${props => props.theme.accentColorThree};
  border-radius: 0px 0px 4px 4px;
  padding-left: 15px;
`;
const StyledDescription = styled.div`
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 0.8rem;
`;

const CompanyName = ({ name }) => <StyledName>{name}</StyledName>;

const Year = ({ start, end, role }) => (
  <StyledYear>{role ? role.join(" | ") : ""}</StyledYear>
);

const CompanyDescription = ({ desc }) => (
  <StyledDescription>{desc}</StyledDescription>
);

const Company = (
  { company, yearStarted, yearEnded, role, description, order },
  id,
  children
) => (
  <div key={order + Math.random()}>
    <CompanyName name={company} />
    <Year start={yearStarted} end={yearEnded} role={role} />
    <CompanyDescription desc={description} />
  </div>
);

export default props => (
  <>
    {props.jobs
      .sort(order)
      .map(
        company =>
          company && Company(company.fields, company.sys.id, props.children)
      )}
  </>
);
