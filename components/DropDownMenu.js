import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GiElectric } from 'react-icons/gi';
import { useUser } from '../context/user';

const DropDownMenu = props => {
  const router = useRouter();

  const user = useUser();
  const { uid } = user;

  const linkStyle = 'font-sans font-semibold';

  const menu = props.navLinks.map((item, index) => {
    if (item.name === 'Masuk' && uid) {
      return null;
    }
    return (
      <MenuItem key={index} className="">
        <Link href={item.path}>
          <a
            className={`${linkStyle} ${
              router.pathname === item.path ? 'text-yellow-600' : 'text-white'
            }`}
          >
            {item.name}
          </a>
        </Link>
      </MenuItem>
    );
  });
  return (
    <Menu>
      <MenuHandler>
        <Button variant="text" style={{ width: 20 }} className="border-0">
          <GiElectric size={30} color="white" className="-ml-4" />
        </Button>
      </MenuHandler>
      <MenuList className="bg-blue-900 rounded-xl md:hidden border-0 -mt-1 w-full">
        {menu}
      </MenuList>
    </Menu>
  );
};

export default DropDownMenu;
