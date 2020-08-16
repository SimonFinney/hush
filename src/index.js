/**
 * @file Application.
 * @copyright Simon Finney 2020
 */

import classnames from "classnames";
import React, { StrictMode, useEffect, useState } from "react";
import { render } from "react-dom";
import Helmet from "react-helmet";
import Sound from "react-sound";

import { description as title } from "../package.json";

import sound from "./white-noise.mp3";
import "./index.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState();
  useEffect(() => setIsLoading(true), []);

  return (
    <StrictMode>
      <Helmet>
        <meta name="description" content={title} />
        <title>{title}</title>
      </Helmet>
      <main>
        <h1 className={classnames({ loading: !isLoading })}>{title}</h1>
      </main>
      <Sound loop={true} playStatus={Sound.status.PLAYING} url={sound} />
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
