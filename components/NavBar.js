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
      <div
        key={index}
        className={`hidden md:block outline-0 ${
          item.name === 'Masuk' ? 'absolute right-8' : ''
        }`}
      >
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
      <header className="fixed w-full z-50 top-0 h-16 border-0 flex justify-between items-center bg-blue-900 px-8 md:text-lg">
        <div className="border-0 -ml-6 md:-ml-2 relative z-50">
          <Link href="/">
            <a>
              <Logo height={50} width={50} color="white" />
            </a>
          </Link>
        </div>
        <div className="border-0 md:hidden md:mr-0 -mr-5">
          <DropDownMenu navLinks={navLinks} userInfo={displayName} />
        </div>
        <div className="flex flex-row border-0 w-full items-center justify-center gap-8 absolute left-0">
          {menu}
        </div>
        <div
          className={`hidden ${
            !uid && 'absolute'
          } md:block relative z-50 border-0 w-40`}
        >
          {uid && <UserInfo displayName={displayName} />}
        </div>
      </header>
    </>
  );
};

export default NavBar;
