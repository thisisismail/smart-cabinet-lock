// import LoginCard from '../components/LoginCard';
import React from 'react';
import Image from 'next/image';
import bannerImg from '../public/Contactless Transction/main-banner-landingpage.png';
import ElockFeatures from '../components/AccordionLandingPage';
import TypeBanner from '../components/TypeAnimationElock';
// import Loading from '../components/Loading';

export default function Home() {
  const ImageAsset = (
    <Image
      placeholder="blur"
      rel="svg"
      src={bannerImg}
      alt="banner"
      className="object-contain w-full h-full rounded-xl border-2"
      onLoad={() => {
        console.log('gambar berhasil dimuat');
      }}
    ></Image>
  );

  const textAnimationStyle = 'border-0 font-mono font-bold text-center';

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
      <div className="mb-6 -mt-2 md:mb-12 md:mt-5">
        <TypeBanner style={`${textAnimationStyle} text-2xl md:text-5xl`} />
      </div>
      <div style={{ maxWidth: 1100 }} className="mt-2 mx-auto px-2">
        <ElockFeatures />
      </div>
    </>
  );
}
