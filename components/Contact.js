import React, { useContext } from "react";
import styled from "styled-components";
import { Contact } from "../lib/layout";
import PDFContext from "../contexts/pdfContext";

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

const Email = styled.a`
  color: ${props => props.theme.strongRedAccent};
  text-decoration: none;
`;

export default () => {
  const { exportPDF } = useContext(PDFContext);
  return (
    <Contact>
      <StyledContact>
        <Button className="noExport" onClick={exportPDF}>
          Download this page as a PDF{" "}
        </Button>
        <Title>Get in touch</Title>
        Want to work together and make something cool?
        <br />
        <br />
        Shoot me an email:{" "}
        <Email href="mailto:sam@shbgm.ca">sam[at]shbgm.ca</Email>
        <br />
        <br />
      </StyledContact>
    </Contact>
  );
};
