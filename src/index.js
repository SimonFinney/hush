/**
 * @file Application.
 * @copyright Simon Finney 2020
 */

import NoSleep from "nosleep.js";
import React, { StrictMode, useEffect, useState } from "react";
import { render } from "react-dom";
import { initialize } from "react-ga";
import Helmet from "react-helmet";

import { description, name } from "../package.json";

import audio from "./audio.mp3";
import "./index.scss";

const noSleep = new NoSleep();
const meta = `${name} — ${description}`;

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
        <meta name="description" content={meta} />
        <title>{meta}</title>
      </Helmet>

      <main className={isLoaded ? null : "loading"}>
        <h1>{name}</h1>

        <audio autoPlay controls loop>
          <source src={audio} />
        </audio>
      </main>
    </StrictMode>
  );
}

initialize("UA-35182446-5");
render(<App />, document.getElementById("root"));
