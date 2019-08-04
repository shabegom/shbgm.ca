import React, { useContext } from "react";
import styled from "styled-components";
import PDFContext from "../contexts/pdfContext";

const StyledToast = styled.div`
  font-size: 1.1rem;
  padding: 5px;
  margin-bottom: 5px;
  background-color: white;
  color: black;
  font-family: "Montserrat", sans-serif;
`;

const Link = styled.a`
  color: ${props => props.theme.accentColorOne};
  text-decoration: none;
`;

export default ({ closeToast }) => {
  const { exportPDF } = useContext(PDFContext);
  return (
    <StyledToast onClick={closeToast}>
      Thanks for visiting shbgm.ca!<br />
      <br /> This is my resume built using React, next.js, and GraphQL. <br />
      <br /> When you <Link onClick={exportPDF}>download my resume</Link> the
      React app is converted to a PDF file instantly.
      <br /> <br />If you're interested in making something cool, reach me at{" "}
      <Link href="mailto:sam@shbgm.ca">sam[at]shbgm.ca</Link> Enjoy!
    </StyledToast>
  );
};
