/**
 * @file Application.
 * @copyright Simon Finney 2020
 */

import React, { StrictMode, useEffect, useState } from "react";
import { render } from "react-dom";
import Helmet from "react-helmet";

import { description as title } from "../package.json";

import audio from "./audio.mp3";
import "./index.scss";

const App = () => {
  const [isLoaded, setIsLoaded] = useState();
  useEffect(() => setIsLoaded(true), []);

  return (
    <StrictMode>
      <Helmet>
        <meta name="description" content={title} />
        <title>{title}</title>
      </Helmet>

      <main className={isLoaded ? null : "loading"}>
        <h1>{title}</h1>

        <audio autoPlay controls loop>
          <source src={audio} />
        </audio>
      </main>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
