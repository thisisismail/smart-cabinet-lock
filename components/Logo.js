import Image from 'next/image';
import MyLogo from '../public/elocklogo.svg';
// import Icon from 'next/icon';

const Logo = props => {
  return (
    <div
      className={`rounded-md overflow-hidden flex justify-center ${props.bgColor}`}
    >
      <Image
        rel="svg"
        src={MyLogo}
        alt="gambar"
        width={props.width}
        height={props.height}
        // className="rotate-90"
      />
    </div>
  );
};

export default Logo;
