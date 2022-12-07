import Logo from './Logo';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationElock = () => {
  const headTextStyle = 'md:text-left font-mono text-white';

  return (
    <>
      {/* <div className="flex">
        <Logo width={50} height={50} color="white" />
        <div className="text-white">
          <div>ELECTRICAL LABORATORY LOCK</div>
          <div>SYSTEM</div>
        </div>
      </div> */}
      <div className="flex border-0">
        {/* <div className="block md:hidden border-0 -ml-3 -mr-2">
          <Logo width={80} height={80} color="white" />
        </div> */}
        <div className="hidden md:block -ml-5">
          <Logo width={125} height={125} color="white" />
        </div>
        <div className="flex flex-col justify-center border-0 gap-0 md:mt-0 -mt-1">
          <div className={`${headTextStyle} text-lg md:text-4xl font-bold -mb-1 md:mb-0`}>
            ELECTRICAL LABORATORY LOCK
          </div>
          <TypeAnimation
            sequence={['SYSTEM', 1000, 'EL©K', 1000]}
            speed={50}
            wrapper="div"
            repeat={Infinity}
            className={`${headTextStyle} text-lg md:text-4xl font-bold`}
          />
          {/* <div className={`${headTextStyle} text-lg md:text-4xl font-bold`}>
            SYSTEM
          </div> */}
          <div className={`${headTextStyle} text-xs md:text-xl`}>
            Tempat ditemukannya keamanan dan keelokan
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeAnimationElock;
