import { TypeAnimation } from 'react-type-animation';

const TypeAnimationElock = props => {
  return (
    <>
      <TypeAnimation
        sequence={['EL©K', 2000, 'Electrical Laboratory Lock', 1000]}
        style={{ fontSize: props.size }}
        className={props.style}
        wrapper="div"
        repeat={Infinity}
      />
    </>
  );
};

export default TypeAnimationElock;
