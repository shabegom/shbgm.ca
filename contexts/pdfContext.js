import React from "react";

const PDFContext = React.createContext({});

export default PDFContext;
export const PDFExportProvider = PDFContext.Provider;
export const PDFExportConsumer = PDFContext.Consumer;
