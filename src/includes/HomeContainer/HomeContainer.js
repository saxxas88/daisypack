import React from "react";
import { createRoot } from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";
import "./HomeContainer.scss";

import BaseWidth from "Components/Container/BaseWidth";
import Hero_w_OveralyImage from "Components/Hero/Hero_w_OveralyImage";

/* Data */
import { hero } from "Data/homepage.data";
import BiorfarmCard from "Components/Cards/BiorfarmCard";
import { biorfarmCards } from "Data/homepage.data";
const HomeContainer = () => {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <Hero_w_OveralyImage
        title={hero?.title}
        info={hero?.info}
        url_bg={hero?.url_bg}
        cta={hero?.cta}
        opacity_value={60}
      />
      <BaseWidth>
        <div className="grid grid-cols-1 xl:grid-cols-6   max-w-lg xl:max-w-full p-2 mx-auto">
          <div className="p-4 xl:col-start-2 xl:col-span-2">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full rounded-full shadow-lg text-orange-400 placeholder-orange-400 bg-gray-300"
            />
          </div>
          <div className="p-4 xl:col-start-4 xl:col-span-2">
            <button className="btn w-full rounded-full shadow-lg text-orange-400 border-yellow-500 hover:border-yellow-500 bg-base-100 hover:bg-base-100 no-animation">
              BUTTON
            </button>
          </div>
        </div>
      </BaseWidth>
      <div className="py-4 bg-orange-200">
        <BaseWidth>
          <div className="flex flex-col md:flex-row ">
            {biorfarmCards &&
              biorfarmCards?.map((el, i) => (
                <div key={i} className="basis-1/4">
                  <BiorfarmCard />
                </div>
              ))}
          </div>
        </BaseWidth>
      </div>
    </HelmetProvider>
  );
};

export default HomeContainer;

const container = document.getElementById("homecontainer");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<HomeContainer />);
