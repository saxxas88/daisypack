import React from "react";
import { createRoot } from "react-dom/client";

import "./Footer.scss";
import Footer_w_Logo from "Components/Footer/Footer_w_Logo";

/* Data */
import { siteData, linkCol1, linkCol2, linkCol3, social } from "Data/footer.data";

const container = document.getElementById("footer");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Footer_w_Logo  siteData={siteData} linkCol1={linkCol1} linkCol2={linkCol2} linkCol3={linkCol3} social={social} />);