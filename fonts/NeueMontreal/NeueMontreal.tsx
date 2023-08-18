import localFont from "next/font/local";

const fontNeueMontreal = localFont({
  src: [
    {
      path: "./NeueMontreal-Light.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./NeueMontreal-LightItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./NeueMontreal-Medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./NeueMontreal-MediumItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export default fontNeueMontreal;
