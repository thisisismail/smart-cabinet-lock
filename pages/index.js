// import LoginCard from '../components/LoginCard';
import React from 'react';
import Image from 'next/image';
import bannerImg from '../public/Contactless Transction/main-banner-landingpage.png';
import ElockFeatures from '../components/AccordionLandingPage';
import TypeBanner from '../components/TypeAnimationElock';
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
      onLoad={() => {
        console.log('gambar berhasil dimuat');
      }}
    ></Image>
  );

  return (
    <>
      <div className="w-full left-0 border-0 bg-blue-900 rounded-b-xl pb-8 -mt-8 pt-8 mb-8">
        <div
          style={{ maxWidth: 800 }}
          className=" border-0 mx-auto aspect-video px-2"
        >
          {ImageAsset}
        </div>
      </div>
      <div
        style={{ maxWidth: 1100 }}
        className="-mt-2 md:mt-5 mb-8 mx-auto px-2 flex flex-row w-full border-0 justify-center md:justify-start items-center"
      >
        <div className="flex flex-col border-0 gap-0 md:gap-2">
          <TypeBanner
            styleFooter={`md:text-2xl`}
            styleHeader={``}
          />
        </div>
      </div>
      <div style={{ maxWidth: 1100 }} className="mt-2 mx-auto px-2">
        <ElockFeatures />
      </div>
    </>
  );
}
