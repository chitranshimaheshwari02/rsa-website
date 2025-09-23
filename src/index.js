// import React from "react";
// import ReactDOM from "react-dom/client";
// import { HashRouter } from "react-router-dom";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <HashRouter>
//     <App />
//   </HashRouter>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
// 1. Import the provider
import { HelmetProvider } from "react-helmet-async"; 
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    {/* 2. Wrap your App component */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </HashRouter>
);