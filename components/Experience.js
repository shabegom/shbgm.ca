import React from "react";
import styled from "styled-components";

import Highlights from "./Highlights";

const data = [
  {
    name: "Wirecutter a New York Times Company",
    key: "wirecutter",
    start: "2016-07",
    end: "Current",
    role: "Project Manager > Program Manager",
    desc:
      "I helped lead Wirecutter engineering teams through the acquisition by the New York Times and have managed multiple high priority projects. I built the Program Management practice and developed the Agile process across the Technology department.",
    highlights: [
      {
        title: "Transition to GraphQL & React Infrastructure",
        items: [
          "Managed a team of full-stack and delivery engineers transitioning to a services architecture using a GraphQL API Gateway to manage multiple back-end applications.",
          "Was primary decision maker as we transitioned our front-end view layer from WordPress (PHP) to React (JavaScript) using Next.js for server side rendering.",
          "This large-scale multi-million dollar project was completed successfully within a month of its original target."
        ]
      },
      {
        title: "Create Project Management Organization",
        items: [
          "Hired 4 Project Managers to manage multiple product, data and delivery engineering teams.",
          "Established roles of Project and Program Manager setting responsibilities and goals.",
          "Scaled with the greater engineering department, adapting to change and growth."
        ]
      },
      {
        title: "Manage Redesign and Content Migration of Core Product",
        items: [
          "Project Manager responsible for the full website redesign and relaunch.",
          "Rebuilt each PHP template and re-architected our main WordPress content type.",
          "Hired and trained team to migrate highly customized content from one WordPress instance to the new version."
        ]
      }
    ]
  },
  {
    name: "Drum Artz Canada",
    key: "drumartz",
    start: "2016-07",
    end: "2014-04",
    role: "Director of Programs",
    desc:
      "I worked with children and youth in at risk communities teaching leadership and empoyment skills through arts education. I managed multiple yearly programs and teams in the Greater Toronto Area. I also developed the business systems for the organiztion including CRM, resource development, and participatioin tracking.",
    highlights: [
      {
        title: "Developed skills of over 50 Youth",
        items: [
          "Worked with ages 14 to 26 on skill building and employment training.",
          "Employed and managed teams of youth during summer programs."
        ]
      },
      {
        title: "Designed & Implemented Business Systems",
        items: [
          "Built out Salesforce as a CRM for payment tracking and management.",
          "Extended Salesforce for participant and government grant tracking."
        ]
      }
    ]
  },
  {
    name: "Non-Profit Arts Work",
    key: "arts",
    start: "2005",
    end: "2014",
    role: "Project Manager | Producer | Production Manager",
    desc: "",
    highlights: [
      {
        title:
          "Founded and successfully raised funding for Open Pit Theatre, the first devised theatre company in Yukon",
        items: []
      },
      {
        title:
          "Produced cross Canada tour of The Grubstake Revisited, a Live Orchestrated film project",
        items: []
      }
    ]
  }
];

const Company = ({ name, key, start, end, role, desc, highlights }) => (
  <>
    <CompanyName name={name} />
    <Year start={start} end={end} role={role} />
    <CompanyDescription desc={desc} />
    <Highlights highlights={highlights} />
  </>
);

const CompanyName = ({ name }) => <StyledName>{name}</StyledName>;

const Year = ({ start, end, role }) => (
  <StyledYear>
    {start} - {end} | {role}
  </StyledYear>
);

const CompanyDescription = ({ desc }) => (
  <StyledDescription>{desc}</StyledDescription>
);

const StyledName = styled.div`
  font-size: 1.4rem;
  font-family: "Montserrat";
  font-weight: bold;
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

export default ({ jobs, highlights }) => (
  <>{data.map(company => Company(company))}</>
);
