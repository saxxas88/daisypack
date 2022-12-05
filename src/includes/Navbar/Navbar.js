import React from "react";
import { createRoot } from "react-dom/client";

import "./Navbar.scss";
import NavbarDrawer from '../../components/Navbar/NavbarDrawer'
import { links } from "../../data/navbar.data";

const container = document.getElementById("navbar");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<NavbarDrawer links={links} />);