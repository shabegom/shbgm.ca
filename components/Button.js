import React, { useContext } from "react";
import styled from "styled-components";
import PDFContext from "../contexts/pdfContext";

const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 0.5em 1.5em;
  font-size: 1rem;
  margin-right: 5px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.accentColorTwo};
  box-shadow: 1px 1px;
  transition: 0.3s;

  &:hover {
    background-color: ${props => props.theme.accentColorThree};
    cursor: pointer;
    box-shadow: 2px 2px;
  }
`;

export default ({ text }) => {
  const { exportPDF } = useContext(PDFContext);
  return (
    <StyledButton className="noExport" onClick={exportPDF}>
      {text}
    </StyledButton>
  );
};
