import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography
} from '@material-tailwind/react';
import { MdLogout, MdAccountCircle } from 'react-icons/md';
import { signOut } from '../api/firebase/services/utilsFirebase';

const UserInfo = props => {
  const linkStyle = 'font-sans font-semibold text-white';

  return (
    <Menu
      placement="bottom-end"
      animate={{
        mount: { y: 0 },
        unmount: { y: -50 }
      }}
    >
      <MenuHandler>
        <div
          className={`${linkStyle} border-0 h-full flex items-center justify-start cursor-pointer w-40`}
        >
          <p className="border-0 border-red-200 block w-40 truncate">
            {props.displayName}
          </p>
        </div>
      </MenuHandler>
      <MenuList className="hidden md:block bg-white rounded-xl border-0 rounded-t-none md:rounded-t-xl mt-0 drop-shadow-xl relative z-40 w-max">
        <MenuItem className="hover:bg-white hover:cursor-default">
          <div className="flex flex-col gap-2">
            <Typography
              variant="h6"
              color="blue"
              textGradient
              className="flex flex-row items-center gap-2"
            >
              <MdAccountCircle size="30" color="black" />
              {props.displayName ?? ''}
            </Typography>
            <Button
              className="flex flex-row justify-center items-center gap-2"
              color="red"
              onClick={signOut}
            >
              <MdLogout size={24} className="" />
              Keluar
            </Button>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserInfo;
