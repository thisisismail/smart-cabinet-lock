import ElockLogo from '../public/ElockLogo';

const Logo = props => {
  return (
    <div
      className={`rounded-md overflow-hidden flex justify-center ${props.bgColor} ${props.animation}`}
    >
      <ElockLogo height={props.height} width={props.width} color="white" />
    </div>
  );
};

export default Logo;
