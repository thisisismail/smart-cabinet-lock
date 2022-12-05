import NavBar from '../NavBar';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="px-0 h-screen border-0 bg-yellow-500 overflow-auto">
      <NavBar />
      <div className="mt-8 w-full border-0 border-black">
        <div
          style={router.pathname === '/' ? {} : { maxWidth: 1100 }}
          className={`${
            router.pathname === '/' ? '' : 'px-2'
          } mx-auto  border-0`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
