import App, { Container } from "next/app";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { PDFExportProvider, PDFExportConsumer } from "../contexts/pdfContext";
import { PDFExport } from "@progress/kendo-react-pdf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: url('/static/fonts/Poppins.ttf') format('truetype');
}
@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat.ttf') format('truetype');
}
@font-face {
    font-family: 'Quicksand';
    src: url('/static/fonts/Quicksand.ttf') format('truetype');
}
@font-face {
    font-family: 'Yantramanav';
    src: url('/static/fonts/Yantramanav.ttf') format('truetype');
}
         .k-pdf-export .noExport {
        display: none;
      } 
      body {
  font-family: "Poppins", sans-serif;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
      }
`;

const theme = {
  bgColor: "#fdfaef",
  textColor: "#070707",
  altTextColor: "#f5f5f5",
  accentColorOne: "#C73D37",
  accentColorTwo: "#f4c9c9",
  accentColorThree: "#ede0e0",
  accentColorFour: "#D97D79"
};

let pdfExportComponent;

const pdfExportObject = {
  pdfExportComponent,
  exportPDF: () => {
    pdfExportComponent.save();
  },
  setPDFExportComponent: component => (pdfExportComponent = component)
};

const PDFProps = {
  margin: "2cm",
  author: "Sam Morrison",
  fileName: "Morrison-Samuel-Resume.pdf",
  title: "Samuel Morrison - Resume"
};

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <PDFExportProvider value={pdfExportObject}>
          <PDFExportConsumer>
            {({ setPDFExportComponent }) => (
              <ThemeProvider theme={theme}>
                <PDFExport
                  ref={component => {
                    return setPDFExportComponent(component);
                  }}
                  {...PDFProps}
                >
                  <GlobalStyle />
                  <Component {...pageProps} />
                </PDFExport>
              </ThemeProvider>
            )}
          </PDFExportConsumer>
        </PDFExportProvider>
      </Container>
    );
  }
}
