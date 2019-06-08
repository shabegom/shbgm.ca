import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  textColor: "#070707",
  altTextColor: "#f5f5f5",
  redAccent: "#D97D79",
  strongRedAccent: "#C73D37",
  purpleAccent: "#f4c9c9",
  greyAccent: "#ede0e0"
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
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
