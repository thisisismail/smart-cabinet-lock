// import LoginCard from '../components/LoginCard';
import React from 'react';
import Image from 'next/image';
import bannerImg from '../public/Contactless Transction/main-banner-landingpage.png';
// import Loading from '../components/Loading';

export default function Home() {
  const [loading, setLoading] = React.useState(
    <div className="w-full h-full border-0 animate-pulse rounded-md bg-grey-200 flex justify-center items-center"></div>
  );
  const [display, setDisplay] = React.useState('hidden');

  const myClass = `object-contain w-full h-full rounded-xl border-0 ${display}`;

  return (
    <>
      {/* <Loading /> */}
      <div className="border-0 flex flex-col xl:flex-row-reverse items-center justify-between xl:h-96">
        <div
          style={{ maxWidth: 800 }}
          className="h-full w-full bg-blue-0 border-0 border-red-300 flex justify-center xl:justify-start"
        >
          {loading}
          <Image
            rel="svg"
            src={bannerImg}
            alt="banner"
            className={myClass}
            onLoad={() => {
              setLoading();
              setDisplay('');
              console.log('image loaded');
            }}
          ></Image>
        </div>
        <div
          style={{ maxWidth: 800 }}
          className="w-full px-4 py-6 flex flex-col justify-between gap-3 "
        >
          <h1 className="text-right font-mono font-bold text-green-700 text-3xl md:text-5xl">
            Temukan dan kembangkan potensi dirimu dan raih masa depan cemerlang
          </h1>
          <h5 className="text-right font-normal font-mono text-grey-600 text-sm md:text-xl">
            Galau cari kerja? Mau mengembangkan diri tanpa pusing memikirkan
            biaya? Bekali dirimu dengan{' '}
            <span className="text-indigo-900 font-bold">Portal</span>{' '}
            <span className="text-green-600 font-bold">Karir</span> dan
            #RaihKarirSekarang
          </h5>
        </div>
      </div>
    </>
  );
}
