import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const PageNotFound = () => (
  <>
    <Head>
      <title>404 Not Found</title>
      <meta
        name="description"
        content="The content you are looking for cannot be found."
      />
    </Head>
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>
        Return <Link href="/">home</Link>.
      </p>
    </div>
  </>
);

export default PageNotFound;
