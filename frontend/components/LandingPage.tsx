import React, { FC } from 'react';
import { useRouter } from 'next/router';

const LandingPage: FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/home'); // Replace '/home' with the URL of your actual home page
  };

  return (
    <main className="landing-page-content">
      <h1>Hi! Nice to meet you,</h1>
      <h2>
        I'm <strong>Cameron Sivo</strong>, a full-stack developer.
      </h2>
      <button onClick={handleContinue}>Continue to site</button>
    </main>
  );
};

export default LandingPage;
