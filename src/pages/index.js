/**
 * @file Application.
 * @copyright Simon Finney 2020
 */

import { graphql, StaticQuery } from "gatsby";
import React, { StrictMode, useEffect, useState } from "react";
import Helmet from "react-helmet";

import audio from "./audio/index.mp3";
import captions from "./audio/index.vtt";

import "../index.scss";

export default () => {
  const [isLoaded, setIsLoaded] = useState();

  useEffect(() => {
    const NoSleep = require("nosleep.js");
    const noSleep = new NoSleep();

    function wake() {
      document.removeEventListener("click", wake);
      noSleep.enable();
    }

    document.addEventListener("click", wake);

    setIsLoaded(true);

    return () => noSleep.disable();
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query DefaultQuery {
          site {
            siteMetadata {
              description
              meta
              name
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { description, meta, name },
        },
      }) => (
        <StrictMode>
          <Helmet>
            <html lang="en" />
            <meta name="description" content={meta} />
            <title>{meta}</title>
            <script
              data-ad-client="ca-pub-3430203179752392"
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
              async
            ></script>
          </Helmet>

          <main className={isLoaded ? null : "loading"}>
            <h1>{name}</h1>
            <p>{description}</p>

            <audio autoPlay controls loop>
              <source src={audio} />
              <track kind="captions" src={captions} />
            </audio>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input name="business" type="hidden" value="ZFJVJTXX7BSE2" />
              <input name="cmd" type="hidden" value="_donations" />
              <input name="currency_code" type="hidden" value="EUR" />
              <input
                alt="Donate with PayPal button"
                name="submit"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
                type="image"
              />
            </form>
          </main>
        </StrictMode>
      )}
    />
  );
};
