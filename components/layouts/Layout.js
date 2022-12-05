import NavBar from '../NavBar';
import { useRouter } from 'next/router';

// // create global variable provider using react context
// export const UserContext = createContext();
// export const LoadingPage = createContext();

const Layout = ({ children }) => {
  // const userName = 'Hello There';
  // const [loading, setLoading] = useState(true);

  // if (true) {
  //   return <>kocakkkk</>;
  // }
  const router = useRouter();

  return (
    //assign value to global variable
    // <UserContext.Provider value={userName}>
    //   <LoadingPage.Provider value={{ loading, setLoading }}>
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
    //   </LoadingPage.Provider>
    // </UserContext.Provider>
  );
};

export default Layout;
