import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const AppDesc = () => {
  const [hide, setHide] = React.useState(true);

  return (
    <>
      {/* <div className="flex flex-row"> */}
      <Card className="">
        <CardBody>
          <Typography
            variant="h5"
            className="text-blue-900 border-b border-gray-400 pb-2 text-lg md:text-xl mb-2"
          >
            EL©K SYSTEM
          </Typography>
          <div className="flex flex-row">
            <div className="text-sm md:text-lg text-justify">
              EL©K SYSTEM (Electrical Laboratory Lock System) merupakan sistem
              penguncian berbasis Internet of Things pada kabinet Laboratorium
              Departemen Teknik Elektro yang berada di Gedung ICELL Fakultas
              Teknik Universitas Indonesia.<span className="block h-2"></span>
              <span className={`${hide ? 'hidden' : 'block'}`}>
                Dengan EL©K SYSTEM, pengguna yang sudah teregistrasi dapat
                dengan mudah membuka kabinet dengan kartu tanda mahasiwanya.
                Seluruh catatan akses pada kabinet juga dapat dipantau melalui
                website EL©K.
              </span>
              <div className="text-blue-600 text-end w-full flex justify-end">
                <div
                  className="hover:text-blue-900 cursor-pointer border-0 border-black w-max"
                  onClick={() => setHide(!hide)}
                >
                  {hide ? 'selengkapnya...' : 'lebih sedikit'}
                </div>
              </div>
            </div>
            {/* <div style={{ width: 2000 }} className="w-full border-0"></div> */}
          </div>
        </CardBody>
      </Card>
      {/* </div> */}
    </>
  );
};

export default AppDesc;
