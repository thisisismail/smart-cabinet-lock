import React from 'react';
import Image from 'next/image';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { ImLinkedin, ImMail } from 'react-icons/im';

const DeveloperInfo = props => {
  return (
    <>
      <Card style={{ width: 310 }} className="border-0">
        <CardBody className="">
          <div
            style={{ height: 250 }}
            className="aspect-square overflow-hidden border-0 border-black mx-auto rounded-xl w-full mb-4"
          >
            <Image
              width="300px"
              height="300px"
              rel="jpg"
              src={props.img}
              alt={props.name}
              className={`border-0 object-contain ${props.style}`}
            ></Image>
          </div>
          <Typography variant="h5" className="text-xl">
            {props.name}
          </Typography>
          <Typography variant="lead" className="text-xl">
            {props.position}
          </Typography>
          <div className="mt-4 flex flex-row justify-between items-center border-0 p-2 relative -ml-6 -mr-6 -mb-6 px-6 bg-blue-900 text-white rounded-b-xl">
            <Typography variant="lead" className="text-base font-bold">
              Kontak
            </Typography>
            <div className="flex gap-3">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`${props.linkedin}`}
                className="block border-0 w-full"
              >
                <ImLinkedin
                  size={30}
                  className="w-full cursor-pointer hover:text-blue-500"
                />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${props.email}`}
                className="block border-0 w-full"
              >
                <ImMail
                  size={30}
                  className="w-full cursor-pointer hover:text-blue-500"
                />
              </a>
              {/* </Tooltip> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default DeveloperInfo;
