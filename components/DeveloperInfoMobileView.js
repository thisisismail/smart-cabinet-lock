import React from 'react';
import Image from 'next/image';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { ImLinkedin, ImMail } from 'react-icons/im';

const DeveloperInfo = props => {
  return (
    <>
      <Card style={{ maxWidth: 700 }} className="w-full p-0">
        <CardBody className="flex items-center gap-4 -m-2">
          <div className="border-0 border-black mx-auto">
            <Image
              width="110px"
              height="110px"
              rel="jpg"
              src={props.img}
              alt={props.name}
              className={`border-0 object-contain rounded-xl ${props.style}`}
            ></Image>
          </div>
          <div className="w-full flex flex-col">
            <Typography variant="h5" className="text-md">
              {props.name}
            </Typography>
            <Typography variant="lead" className="text-md -mt-1">
              {props.position}
            </Typography>
            <div className="flex flex-row justify-end items-center border-0 relative  text-blue-900 rounded-b-xl">
              <div className="flex gap-2">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`${props.linkedin}`}
                  className="block border-0 w-full"
                >
                  <ImLinkedin
                    size={25}
                    className="w-full cursor-pointer rounded-lg hover:text-blue-500"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${props.email}`}
                  className="block border-0 w-full"
                >
                  <ImMail
                    size={25}
                    className="w-full cursor-pointer rounded-lg hover:text-blue-500"
                  />
                </a>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default DeveloperInfo;
