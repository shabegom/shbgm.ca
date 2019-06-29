import React, { useEffect } from "react";
import withData from "../lib/apollo.js";
import { Grid } from "../lib/layout";
import Fonts from "../components/Fonts";

import Contact from "../components/Contact";
import Numbers from "../components/Numbers";
import Person from "../components/Person/";
import Jobs from "../components/Jobs/";
import Insights from "../components/Insights/";

export default withData(props => {
  useEffect(() => Fonts(), []);
  return (
    <>
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
