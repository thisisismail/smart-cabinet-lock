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
        <Button variant="text" className="border-0 h-12 p-0">
          <Logo height={50} width={50} />
        </Button>
      </MenuHandler>
      <MenuList className=" bg-white rounded-xl md:hidden border-0 -mt-1 rounded-t-none w-full drop-shadow-xl relative z-40">
        {menu}
      </MenuList>
    </Menu>
  );
};

export default DropDownMenu;
