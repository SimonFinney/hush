/**
 * @file Application.
 * @copyright Simon Finney 2020
 */

import NoSleep from "nosleep.js";
import React, { StrictMode, useEffect, useState } from "react";
import { render } from "react-dom";
import { initialize } from "react-ga";
import Helmet from "react-helmet";

import { description as title } from "../package.json";

import audio from "./audio.mp3";
import "./index.scss";

const noSleep = new NoSleep();

function wake() {
  document.removeEventListener("click", wake);
  noSleep.enable();
}

function App() {
  const [isLoaded, setIsLoaded] = useState();

  useEffect(() => {
    document.addEventListener("click", wake);
    setIsLoaded(true);

    return () => noSleep.disable();
  }, []);

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
}

initialize("243418111");
render(<App />, document.getElementById("root"));
