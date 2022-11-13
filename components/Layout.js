import React from 'react';
import NavBar from './NavBar';

// // create global variable provider using react context
// export const UserContext = createContext();
// export const LoadingPage = createContext();

const Layout = ({ children }) => {
  // const userName = 'Hello There';
  // const [loading, setLoading] = useState(true);

  return (
    //assign value to global variable
    // <UserContext.Provider value={userName}>
    //   <LoadingPage.Provider value={{ loading, setLoading }}>
    <div className="px-0 h-screen border-0 bg-yellow-600">
      <NavBar />
      <div className="mt-4 w-full border-0 border-black">
        <div style={{ maxWidth: 1000 }} className="mx-auto">
          {children}
        </div>
      </div>
    </div>
    //   </LoadingPage.Provider>
    // </UserContext.Provider>
  );
};

export default Layout;
