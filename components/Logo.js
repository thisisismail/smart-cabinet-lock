import ElockLogo from '../public/ElockLogo';

const Logo = props => {
  return (
    <div
      className={` overflow-hidden flex justify-center ${props.bgColor} ${props.animation}`}
    >
      <ElockLogo
        height={props.height}
        width={props.width}
        color={props.color}
      />
    </div>
  );
};

export default Logo;
