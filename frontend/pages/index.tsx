import Head from 'next/head';
import { FC } from 'react';
import LandingPage from '../components/LandingPage';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Welcome | My Portfolio</title>
      </Head>
      <LandingPage />
    </>
  );
};

export default Home;
