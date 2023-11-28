import Head from "next/head";
import { FC } from "react";
import Main from "../components/Main";

const Home: FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Cameron Sivo Portfolio" />
        <meta name="keywords" content="Cameron, Sivo, Portfolio" />
        <meta name="author" content="Cameron Sivo" />
        <link rel="icon" href="/images/portfolio-logo.png" type="image/png" />
        <title>Cameron Sivo</title>
      </Head>
      <Main />
    </>
  );
};

export default Home;
