import React from 'react';
import App from '../About/app';
import { createRoot } from 'react-dom/client';
import "./app.scss"
const container = document.getElementById('about');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="about" />);
