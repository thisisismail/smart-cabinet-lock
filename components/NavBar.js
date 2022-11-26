import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from '../services/data.js';
import DropDownMenu from './DropDownMenu';
import UserInfo from './UserInfo';
// don't  forget to import the provider
// import { UserContext, LoadingPage } from './Layout';
import { useUser } from '../context/user';

const NavBar = () => {
  // getting the value from context provider
  // const value = React.useContext(UserContext);
  // const { loading, setLoading } = React.useContext(LoadingPage);

  const user = useUser();

  const { uid, displayName } = user;

  const router = useRouter();

  const linkStyle = 'font-sans font-semibold';

  const menu = navLinks.map((item, index) => {
    if (item.name === 'Masuk' && uid) {
      return null;
    }
    return (
      <div
        key={index}
        className="hidden md:block"
        // style={{ width: item.name === 'Masuk' && 200 }}
      >
        <Link href={item.path}>
          <a
            className={`${linkStyle} ${
              router.pathname === item.path ? 'text-yellow-600' : 'text-white'
            }`}
          >
            {item.name}
          </a>
        </Link>
      </div>
    );
  });

  return (
    <>
      <header className="sticky z-40 top-0 h-12 border-0 flex justify-between items-center bg-blue-900 rounded-b-lg px-4">
        <div className="border-0 md:hidden">
          <DropDownMenu navLinks={navLinks} />
        </div>
        {menu}
        {uid && <UserInfo displayName={displayName} uid={uid} />}
        {/* <UserInfo /> */}
      </header>
    </>
  );
};

export default NavBar;
