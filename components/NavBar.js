import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from '../services/data.js';
import Logo from '../components/Logo';
import DropDownMenu from './DropDownMenu';
import UserInfo from './UserInfo';
// don't  forget to import the provider
// import { UserContext, LoadingPage } from './Layout';
import { useUser } from '../context/user';

const NavBar = () => {
  const user = useUser();

  const { uid, displayName } = user;

  const router = useRouter();

  const linkStyle = 'font-sans font-semibold outline-0';

  const menu = navLinks.map((item, index) => {
    if (item.name === 'Home') {
      return null;
    }

    if (item.name === 'Masuk' && uid) {
      return null;
    }
    return (
      <div key={index} className="hidden md:block outline-0">
        <Link href={item.path}>
          <a
            className={`${linkStyle} ${
              router.pathname === item.path ? 'text-yellow-500' : 'text-white'
            }`}
          >
            {item.name === 'Home' ? <Logo height={50} width={50} /> : item.name}
          </a>
        </Link>
      </div>
    );
  });

  return (
    <>
      <header className="sticky z-50 top-0 h-16 border-0 flex justify-between items-center bg-blue-900 px-4 md:text-lg">
        <div>
          <Link href="/">
            <a>
              <Logo height={50} width={50} color="white"/>
            </a>
          </Link>
        </div>
        <div className="border-0 md:hidden">
          <DropDownMenu navLinks={navLinks} userInfo={displayName} />
        </div>
        {menu}
        <div className={`hidden ${!uid && 'absolute'} md:block`}>
          {uid && <UserInfo displayName={displayName} />}
        </div>
      </header>
    </>
  );
};

export default NavBar;
