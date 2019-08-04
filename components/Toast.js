import React from "react";
import styled from "styled-components";

const StyledToast = styled.div`
  font-size: 1.1rem;
  padding: 5px;
  margin-bottom: 5px;
  background-color: white;
  color: black;
  font-family: "Montserrat", sans-serif;
`;

const Email = styled.a`
  color: ${props => props.theme.accentColorOne};
  text-decoration: none;
`;

export default ({ closeToast }) => (
  <StyledToast onClick={closeToast}>
    Thanks for visiting shbgm.ca!<br />
    <br /> This is my resume built using React, next.js, and GraphQL. <br />The
    PDF download is converting the React app to a PDF on the fly. Try it out!{" "}
    <br /> <br />If you're interested in making something cool, reach me at{" "}
    <Email href="mailto:sam@shbgm.ca">sam[at]shbgm.ca</Email> Enjoy!
  </StyledToast>
);
