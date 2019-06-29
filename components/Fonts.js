import FontFaceObserver from "fontfaceobserver";

export default () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Montserrat|Poppins|Quicksand:300|Yantramanav:100&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const poppins = new FontFaceObserver("Poppins");
  const montserrat = new FontFaceObserver("Montserrat");
  const quicksand = new FontFaceObserver("Quicksand");
  const yan = new FontFaceObserver("Yantramanav");

  poppins.load().then(() => document.documentElement.classList.add("poppins"));
  montserrat
    .load()
    .then(() => document.documentElement.classList.add("montserrat"));
  quicksand
    .load()
    .then(() => document.documentElement.classList.add("quicksand"));
  yan.load().then(() => document.documentElement.classList.add("yan"));
};
