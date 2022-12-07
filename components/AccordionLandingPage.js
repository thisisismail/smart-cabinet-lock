import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  CardBody,
  Typography
} from '@material-tailwind/react';
import { features } from '../services/data';

const AccordionLandingPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  const webFeatures = features.map((data, index = 1) => {
    index = index + 1;
    return (
      <div key={index}>
        <Accordion open={open === index}>
          <AccordionHeader
            className="animation-75 text-left text-lg md:text-xl pb-2 -mb-1 text-gray-600 font-regular"
            onClick={() => {
              handleOpen(index);
            }}
          >
            {data.header}
          </AccordionHeader>
          <AccordionBody className="animation-75 text-left text-sm md:text-lg">
            {data.body}
          </AccordionBody>
        </Accordion>
      </div>
    );
  });

  return (
    <>
      <Card>
        <CardBody className="mb-4">
          <Typography
            variant="h5"
            className="text-blue-900 border-b border-gray-400 pb-2 text-lg md:text-xl"
          >
            Fitur Kami
          </Typography>
          {webFeatures}
        </CardBody>
      </Card>
    </>
  );
};

export default AccordionLandingPage;
