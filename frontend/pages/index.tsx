import Head from 'next/head';
import { FC } from 'react';
import Main from '../components/Main';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Cameron Sivo</title>
      </Head>
      <Main />
    </>
  );
};

export default Home;
