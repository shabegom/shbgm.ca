import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

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
  color: #070707;
  background-color: FFFAE7;
      }
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <GlobalStyle />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
