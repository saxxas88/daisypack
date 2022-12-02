import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import Container from "../Container";
import BaseWidth from "../Container/BaseWidth";
import "./HomeContainer.scss";

const HomeContainer = () => {
  const helmetContext = {};
  return (
    <BaseWidth>
      <HelmetProvider context={helmetContext}>
        <Container />
        <div className="w-full h-20 bg-blue-300 "></div>
      </HelmetProvider>
    </BaseWidth>
  );
};

export default HomeContainer;

const container = document.getElementById("homecontainer");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<HomeContainer />);
