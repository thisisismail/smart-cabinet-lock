import React from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>{!loading ? <Component {...pageProps} /> : <Loading />}</Layout>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
