import React from 'react';
import { Typography } from '@material-tailwind/react';
import DeveloperInfoMobile from '../components/DeveloperInfoMobileView';
import DeveloperInfoDesktop from '../components/DeveloperInfo';
import { Developers } from '../services/data';

const AboutUs = () => {
  const developersInfoDesktop = Developers.map((data, index) => (
    <div
      key={index}
      className={`${
        index % 2 !== 0 ? 'justify-self-start' : 'justify-self-end'
      }`}
    >
      <DeveloperInfoDesktop
        name={data.name}
        position={data.position}
        linkedin={data.linkedin}
        email={data.email}
        img={data.img}
        style={data.style}
      />
    </div>
  ));

  const developersInfoMobile = Developers.map((data, index) => (
    <div
      key={index}
      className={`${
        index % 2 !== 0 ? 'justify-self-start' : 'justify-self-end'
      }`}
    >
      <DeveloperInfoMobile
        name={data.name}
        position={data.position}
        linkedin={data.linkedin}
        email={data.email}
        img={data.img}
        style={data.style}
      />
    </div>
  ));

  return (
    <>
      <Typography
        variant="h5"
        className="text-blue-900 mx-auto text-center mb-4 text-xl md:text-xl"
      >
        EL©K TEAM
      </Typography>
      <div className="border-0 hidden md:block">
        <div className="grid grid-rows-2 grid-cols-2 justify-items-center gap-8">
          {developersInfoDesktop}
        </div>
      </div>
      <div className="border-0 flex flex-col gap-2 md:hidden">{developersInfoMobile}</div>
    </>
  );
};

export default AboutUs;
