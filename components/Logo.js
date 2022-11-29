import Image from 'next/image';
import MyLogo from '../public/elocklogo.svg';
// import Icon from 'next/icon';

const Logo = () => {
  return (
    <div className="rounded-md overflow-hidden flex justify-center">
      <Image rel="svg" src={MyLogo} alt="gambar" width="40" height="40" />
    </div>
  );
};

export default Logo;
