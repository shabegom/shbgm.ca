import React from "react";
import withData from "../lib/apollo.js";
import { Grid } from "../lib/layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Toast from "../components/Toast";
import Contact from "../components/Contact";
import Numbers from "../components/Numbers";
import Person from "../components/Person/";
import Jobs from "../components/Jobs/";
import Insights from "../components/Insights/";

export default withData(props => {
  toast(<Toast />);
  return (
    <>
      <ToastContainer
        autoClose={8000}
        progressStyle={{ background: "#D97D79" }}
        className="noExport"
        position="top-left"
        closeButton={false}
        style={{ width: "60%" }}
      />
      <Grid>
        <Person />
        <Numbers />
        <Jobs />
        <Contact />
        <Insights />
      </Grid>
    </>
  );
});
