import Head from "next/head";

import Header from "containers/Header";
import Footer from "containers/Footer";
import Socials from "containers/Socials";

import "styles/normalize.css";
import "styles/pure-style.css";
import "styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>NFT World</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      <Socials />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
