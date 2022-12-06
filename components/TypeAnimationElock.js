import Logo from './Logo';

const TypeAnimationElock = () => {
  const headTextStyle = 'md:text-left font-mono';

  return (
    <>
      {/* <div className="flex">
        <Logo width={50} height={50} color="white" />
        <div className="text-white">
          <div>ELECTRICAL LABORATORY LOCK</div>
          <div>SYSTEM</div>
        </div>
      </div> */}
      <div className="flex -ml-4 border-0">
        <div className="block md:hidden border-0">
          <Logo width={80} height={80} color="black" bgColor="" />
        </div>
        <div className="hidden md:block">
          <Logo width={125} height={125} color="black" bgColor="" />
        </div>
        <div className="flex flex-col justify-center border-0">
          <div className={`${headTextStyle} text-lg md:text-4xl font-bold`}>
            ELECTRICAL LABORATORY LOCK
          </div>
          <div className={`${headTextStyle} text-lg md:text-4xl font-bold`}>
            SYSTEM
          </div>
          <div className={`${headTextStyle} text-xs md:text-xl`}>
            Tempat ditemukannya keamanan dan keelokan
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeAnimationElock;
