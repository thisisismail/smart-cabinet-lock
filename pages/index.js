// import LoginCard from '../components/LoginCard';
import React from 'react';
import Image from 'next/image';
import bannerImg from '../public/Contactless Transction/main-banner-landingpage.png';
import ElockFeatures from '../components/AccordionLandingPage';
import TypeBanner from '../components/TypeAnimationElock';
import AppDesc from '../components/AppDesc';
// import Logo from '../components/Logo';
// import Loading from '../components/Loading';

export default function Home() {
  const ImageAsset = (
    <Image
      placeholder="blur"
      rel="svg"
      src={bannerImg}
      alt="banner"
      className="object-contain w-full h-full rounded-xl border-0"
    ></Image>
  );

  return (
    <>
      <div className="w-full left-0 border-0 bg-blue-900 rounded-b-xl pb-8 -mt-8 pt-8 mb-4">
        <div
          style={{ maxWidth: 800 }}
          className=" border-0 mx-auto aspect-video px-2 md:mt-0 -mt-0"
        >
          {ImageAsset}
          <div className="text-center border-0 left-0 border-white absolute -mt-4 w-full">
            <a
              rel="noopener noreferrer"
              target="_blank"
              style={{ fontSize: '10px' }}
              href="http://www.freepik.com/vectorjuice"
              className="text-blue-800 text-sm opacity-40"
            >
              Image is Designed by vectorjuice / Freepik & Edited by Ismail
            </a>
          </div>
        </div>
        <div
          style={{ maxWidth: 1100 }}
          className="mt-4 pl-8 md:mt-5 mb-0 mx-auto px-2 flex flex-row w-full border-0 justify-start md:justify-center items-center"
        >
          <div className="flex flex-col border-0 gap-0 md:gap-2">
            <TypeBanner styleFooter={`md:text-2xl`} styleHeader={``} />
          </div>
        </div>
      </div>
      <div
        style={{ maxWidth: 1100 }}
        className="mt-2 mx-auto px-2 flex flex-col lg:flex-col gap-4"
      >
        <div className="">
          <AppDesc />
        </div>
        <div className="w-ful border-0">
          <ElockFeatures />
        </div>
      </div>
    </>
  );
}
