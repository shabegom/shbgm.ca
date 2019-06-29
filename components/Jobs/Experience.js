import React from "react";
import styled from "styled-components";
import { order } from "../../lib/utils";

import Highlights from "./Highlights";

const Company = (
  { company, key, yearStarted, yearEnded, role, description },
  id,
  children
) => (
  <>
    <CompanyName name={company} />
    <Year start={yearStarted} end={yearEnded} role={role} />
    <CompanyDescription desc={description} />
    {React.cloneElement(children, { jobId: id })}
  </>
);

const CompanyName = ({ name }) => <StyledName>{name}</StyledName>;

const Year = ({ start, end, role }) => (
  <StyledYear>{role.join(" | ")}</StyledYear>
);

const CompanyDescription = ({ desc }) => (
  <StyledDescription>{desc}</StyledDescription>
);

const StyledName = styled.div`
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;
  background-color: ${props => props.theme.purpleAccent};
  border-radius: 2px 2px 0px 0px;
  padding-top: 5px;
  padding-left: 10px;
`;

const StyledYear = styled.div`
  font-family: "Yantramanav";
  font-size: 0.8rem;
  margin-bottom: 10px;
  background-color: ${props => props.theme.greyAccent};
  border-radius: 0px 0px 4px 4px;
  padding-left: 15px;
`;
const StyledDescription = styled.div`
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 0.9rem;
`;

export default props => (
  <>
    {props.jobs
      .sort(order)
      .map(company => Company(company.fields, company.sys.id, props.children))}
  </>
);
