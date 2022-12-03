import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import Container from "../Container";
import BaseWidth from "../Container/BaseWidth";
import "./Terzo.scss";

const Terzo = () => {
  const helmetContext = {};
  return (
    <BaseWidth>
      <HelmetProvider context={helmetContext}>
        <Container />
        <div className="w-full h-20 bg-blue-400 "></div>
      </HelmetProvider>
    </BaseWidth>
  );
};

export default Terzo;

const container = document.getElementById("terzo");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Terzo />);
