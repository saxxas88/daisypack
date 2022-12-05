import React from "react";
import { createRoot } from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";
import "./HomeContainer.scss";

import BaseWidth from "../../components/Container/BaseWidth";


const HomeContainer = () => {
  const helmetContext = {};
  return (
    <BaseWidth>
      <HelmetProvider context={helmetContext}>
        <div className="w-full h-80 bg-green-500 ">FUNZIONA!!!</div>
      </HelmetProvider>
    </BaseWidth>
  );
};

export default HomeContainer;

const container = document.getElementById("homecontainer");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<HomeContainer />);