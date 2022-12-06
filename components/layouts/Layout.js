import { useRouter } from 'next/router';
import NavBar from '../NavBar';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="px-0 min-h-screen border-0 bg-yellow-500 overflow-auto flex flex-col">
      <NavBar />
      <div className="mt-8 w-full border-0 border-black flex-grow">
        <div
          style={router.pathname === '/' ? {} : { maxWidth: 1100 }}
          className={`${
            router.pathname === '/' ? '' : 'px-2'
          } mx-auto  border-0`}
        >
          {children}
        </div>
      </div>
      <div className="mt-40 w-full"></div>
      <Footer />
    </div>
  );
};

export default Layout;
