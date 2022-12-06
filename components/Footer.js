import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <>
      <div className="h-40 mt-auto w-full bg-black flex flex-row justify-center items-start p-4">
        <div className="flex">
          <Logo width={50} height={50} color="white"/>
          <div className="text-white">
            <div>ELECTRICAL LABORATORY LOCK</div>
            <div>SYSTEM</div>
          </div>
        </div>
        {/* <Logo width={50} height={50} /> */}
      </div>
    </>
  );
};

export default Footer;
