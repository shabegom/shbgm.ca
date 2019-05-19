import React from "react";
import {
  Grid,
  Numbers,
  Name,
  Headline,
  Blurb,
  Experience,
  Insights
} from "../lib/layout";
import NumbersComponent from "../components/Numbers";

export default () => (
  <>
    <Grid>
      <Numbers>
        <NumbersComponent />
      </Numbers>
      <Name>Sam Morrison</Name>
      <Headline>I Build Great Teams</Headline>
      <Blurb>
        Aliqua fugiat in ullamco nisi sit ullamco est. Sit irure nulla dolor
        laborum est ea anim. Irure nisi ipsum laboris qui mollit magna minim
        voluptate est ad nostrud non. Exercitation proident in ipsum nulla.
        Dolore laboris exercitation et veniam ad non sint minim tempor eiusmod.
      </Blurb>
      <Experience>
        Work Experience Layout Component Do officia proident culpa incididunt
        laboris. Et fugiat ut amet cillum dolor. Mollit est officia aliqua
        officia fugiat officia adipisicing officia qui qui commodo qui. Non
        tempor exercitation aliquip anim officia. Qui nisi nostrud ad sit sunt
        ullamco nulla. Ipsum duis aute cillum est et duis id. Ut officia eiusmod
        irure eiusmod in voluptate quis Lorem velit officia labore et. Irure
        aliqua est reprehenderit dolore amet consectetur eiusmod exercitation.
        Lorem ipsum nisi tempor veniam sit nulla. Quis ut consequat sunt ipsum
        labore excepteur exercitation commodo dolor amet cillum. Ex pariatur
        nostrud ullamco veniam ex sit sit. Est amet labore velit enim culpa
        cillum velit minim incididunt eiusmod. Dolor consectetur cupidatat
        mollit velit non ea id.
      </Experience>
      <Insights>
        Insights Layout Component Esse id dolore proident elit sint incididunt
        velit exercitation deserunt in cillum dolore non. Ullamco dolor in eu
        incididunt dolor ut non nulla cupidatat qui tempor labore occaecat amet.
        Cupidatat irure est deserunt quis laboris anim do veniam. Et ea quis ex
        sunt officia ad amet id. Quis minim cupidatat elit nostrud ut magna id
        commodo velit cupidatat. Laborum veniam ipsum consectetur dolore
        consectetur veniam incididunt elit nostrud non sunt. Aliqua tempor sit
        ex mollit incididunt aliqua anim labore cillum. Anim magna deserunt
        exercitation nisi nostrud. Laboris ad aliqua nostrud reprehenderit
        cillum dolore ut sunt adipisicing. Consectetur reprehenderit officia
        magna ad deserunt elit eu incididunt incididunt laborum. Amet sit
        officia anim dolor et culpa duis velit. Reprehenderit voluptate ad
        incididunt incididunt deserunt reprehenderit quis. Nostrud culpa duis
        eiusmod ipsum ullamco elit mollit fugiat.
      </Insights>
    </Grid>
  </>
);
