// my-portfolio-frontend-ts/pages/index.tsx

import Head from 'next/head'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <main>
        <h1>Welcome to My Portfolio</h1>
      </main>
    </div>
  )
}

export default Home
