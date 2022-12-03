import React from "react";
import HeadHelmet from "./HeadHelmet";
function Container() {
  return (
    <>
      <HeadHelmet
        title="Helmet!"
        description="Beginner friendly page for learning React Helmet."
      />
      <div className="grid grid-cols-4 gap-4 text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
        <div className="p-4 rounded-lg shadow-lg bg-cyan-800">01</div>
        <div className="p-4 rounded-lg shadow-lg bg-blue-500">02</div>
        <div className="p-4 rounded-lg shadow-lg bg-violet-800">03</div>
        <div className="p-4 rounded-lg shadow-lg bg-red-700">
          <a href="/ciao" target="_blank">
            XXXX
          </a>
        </div>
      </div>
    </>
  );
}

export default Container;
