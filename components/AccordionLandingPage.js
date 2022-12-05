import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  CardBody
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
            className="animation-75 text-left text-base md:text-xl"
            onClick={() => {
              handleOpen(index);
            }}
          >
            {data.header}
          </AccordionHeader>
          <AccordionBody className="animation-75 text-left text-base md:text-lg">
            {data.body}
          </AccordionBody>
        </Accordion>
      </div>
    );
  });

  return (
    <>
      <Card>
        <CardBody>{webFeatures}</CardBody>
      </Card>
    </>
  );
};

export default AccordionLandingPage;
