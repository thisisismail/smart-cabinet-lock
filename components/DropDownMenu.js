import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from '@material-tailwind/react';
import { MdLogout, MdAccountCircle, MdMenu } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../context/user';
import { signOut } from '../api/firebase/services/utilsFirebase';

const DropDownMenu = props => {
  const [blink, setBlink] = React.useState('');

  const router = useRouter();

  const user = useUser();
  const { uid, displayName } = user;

  React.useEffect(() => {
    setBlink('animate-pulse');
    setTimeout(() => {
      setBlink('');
    }, 4000);
  }, [uid]);

  const linkStyle = 'font-sans font-semibold';

  const menu = props.navLinks.map((item, index) => {
    if (item.name === 'Masuk' && uid) {
      return null;
    }

    if (item.name === 'Home') {
      return null;
    }

    return (
      <MenuItem key={index} href={item.path}>
        <Link href={item.path} className="w-full">
          <a
            href={item.path}
            className={`${linkStyle} ${
              router.pathname === item.path
                ? 'text-yellow-700'
                : 'text-blue-900'
            }`}
          >
            {item.name}
          </a>
        </Link>
      </MenuItem>
    );
  });

  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: -50 }
      }}
    >
      <MenuHandler>
        <Button variant="text" className="border-0 h-14 p-0">
          <MdMenu
            size={40}
            className={`${uid ? 'text-yellow-600' : 'text-white'} ${blink}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className=" bg-white rounded-xl md:hidden border-0 -mt-2 rounded-t-none w-full drop-shadow-xl relative z-40">
        {menu}
        <Menu placement="bottom-end" offset={15}>
          <MenuHandler className={`${!uid && 'hidden'} mb-2`}>
            <MenuItem className={`flex flex-row items-start`}>
              <div className={`${linkStyle} text-blue-900`}>{displayName}</div>
              <MdAccountCircle
                size="30"
                color="black"
                className="absolute -mt-6 right-4"
              />
            </MenuItem>
          </MenuHandler>
          <MenuList className="md:hidden bg-white rounded-xl border-0 -mt-2 rounded-t-none  drop-shadow-xl relative z-40 w-full">
            <MenuItem className="md:hidden">
              <Button
                className="flex w-full flex-row justify-center items-center gap-2"
                color="red"
                onClick={signOut}
              >
                <MdLogout size={24} className="" />
                Keluar
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </MenuList>
    </Menu>
  );
};

export default DropDownMenu;
