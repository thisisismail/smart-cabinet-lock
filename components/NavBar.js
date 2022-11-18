import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from '../services/data.js';
// don't  forget to import the provider
// import { UserContext, LoadingPage } from './Layout';

const NavBar = () => {
  // getting the value from context provider
  // const value = React.useContext(UserContext);
  // const { loading, setLoading } = React.useContext(LoadingPage);

  const router = useRouter();

  const linkStyle = 'font-sans font-semibold';

  const menu = navLinks.map((item, index) => {
    return (
      // <p key={index} className="font-sans font-semibold text-white">
      <Link href={item.path} key={index}>
        <a
          className={`${linkStyle} ${
            router.pathname == item.path ? 'text-yellow-600' : 'text-white'
          }`}
        >
          {item.name}
        </a>
      </Link>
      // </p>
    );
  });

  return (
    <>
      <header className="sticky z-40 top-0 h-12 border-0 flex justify-between items-center bg-blue-900 rounded-b-lg px-4">
        {menu}
        {/* {value} */}
      </header>
    </>
  );
};

export default NavBar;
