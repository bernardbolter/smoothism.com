import React, { useEffect, useState } from "react";
import SmothProvider from "../providers/SmoothProvider";

import "../styles/index.css";
import "../styles/intro.scss";
import "../styles/project.scss";
import "../styles/projects.scss";
import "../styles/contact-form.scss";
import "../styles/contact.scss";
import "../styles/daten.scss";
import "../styles/footer.scss";
import "../styles/impressum.scss";
import "../styles/modal.scss";
import "../styles/nav.scss";
import "../styles/philosophy.scss";

function MyApp({ Component, pageProps, router }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <SmothProvider>
      {isMounted && <Component {...pageProps} key={router.route} />}
    </SmothProvider>
  );
}

export default MyApp;
