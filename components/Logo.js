// import Image from 'next/image';
// import MyLogo from '../public/elocklogo.svg';
import ElockLogo from '../public/ElockLogo';
// import Icon from 'next/icon';

const Logo = props => {
  return (
    <div
      className={`rounded-md overflow-hidden flex justify-center ${props.bgColor} ${props.animation}`}
    >
      {/* <Image
        rel="svg"
        src={MyLogo}
        alt="gambar"
        width={props.width}
        height={props.height}
      /> */}
      <ElockLogo height={40} width={40} color="white" />
    </div>
  );
};

export default Logo;
