// import LoginCard from '../components/LoginCard';
import React from 'react';
import Image from 'next/image';
import bannerImg from '../public/Contactless Transction/main-banner-landingpage.png';
// import Loading from '../components/Loading';

export default function Home() {
  const myClass = `object-contain w-full h-full rounded-xl border-2`;

  return (
    <>
      <div className="border-0">
        <div
          style={{ maxWidth: 800 }}
          className=" border-0 mx-auto aspect-video"
        >
          {/* {loading} */}
          <Image
            placeholder="blur"
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
        {/* <div
          style={{ maxWidth: 800 }}
          className="border-2"
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
        </div> */}
      </div>
    </>
  );
}
