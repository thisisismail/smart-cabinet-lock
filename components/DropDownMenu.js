import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { GiElectric } from 'react-icons/gi';
import { useUser } from '../context/user';
import Logo from '../components/Logo';

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
      <MenuItem key={index} className="" href={item.path}>
        <Link href={item.path} className="w-full">
          <a
            href={item.path}
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
        <Button variant="text" className="border-0 h-14 p-0">
          <Logo height={40} width={40} />
        </Button>
      </MenuHandler>
      <MenuList className="bg-blue-900 rounded-xl md:hidden border-0 -mt-1 w-full">
        {menu}
      </MenuList>
    </Menu>
  );
};

export default DropDownMenu;
