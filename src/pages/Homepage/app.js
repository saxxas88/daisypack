import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Container from "../../components/Container";
import BaseWidth from "../../components/Container/BaseWidth";
const App = (props) => {

  const helmetContext = {};
  
  return (
    <BaseWidth >
      <HelmetProvider context={helmetContext}>
        <Container />
        <div className="w-full h-20 bg-green-200 "></div>
      </HelmetProvider>
    </BaseWidth>
  );
};
export default App;
