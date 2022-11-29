import Header from 'next/head';
import '../styles/globals.css';
import Layout from '../components/layouts/Layout';
import AuthStateChangeProvider from '../context/auth';
import { UserProvider } from '../context/user';

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>{!loading ? <Component {...pageProps} /> : <Loading />}</Layout>
    <UserProvider>
      <Header>
        <title>EL©K</title>
        <icon
          rel="shortcut icon"
          href="/favicon.ico"
          type="ico"
        />
      </Header>
      <Layout>
        <AuthStateChangeProvider>
          <Component {...pageProps} />
        </AuthStateChangeProvider>
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
