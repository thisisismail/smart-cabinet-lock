import React from 'react';
import { Typography, Card, CardBody } from '@material-tailwind/react';
import DeveloperInfoMobile from '../components/DeveloperInfoMobileView';
import DeveloperInfoDesktop from '../components/DeveloperInfo';
import { Developers } from '../services/data';

const AboutUs = () => {
  const developersInfoDesktop = Developers.map((data, index) => (
    <div
      key={index}
      // className={`${
      //   index % 2 !== 0 ? 'justify-self-start' : 'justify-self-end'
      // }`}
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
      <Card style={{ maxWidth: 1100 }} className="mb-4 w-full mx-auto">
        <CardBody>
          <Typography
            variant="h5"
            className="text-blue-900 mx-auto text-center mb-4 text-xl md:text-xl"
          >
            EL©K TEAM
          </Typography>
          <div className="text-sm md:text-lg">
            EL©K TEAM adalah kelompok tugas matakuliah Desain Proyek yang
            beranggotakan empat mahasiswa Teknik Elektro Universitas Indonesia.
            Kami mengimplementasikan berbagai keilmuan terkait teknologi secadra
            umum dan teknik elektro secara khusus untuk membuat produk EL©K
            SYSTEM.
          </div>
        </CardBody>
      </Card>
      <div className="border-0 w-full mb-8">
        <div className="border-0 hidden md:block w-full">
          <div className="mx-auto w-min">
            <div className="flex flex-row gap-4">{developersInfoDesktop}</div>
          </div>
        </div>
        <div className="border-0 flex flex-col gap-2 md:hidden">
          {developersInfoMobile}
        </div>
      </div>
      <Card style={{ maxWidth: 1100 }} className="mb-8 w-full mx-auto">
        <CardBody>
          <Typography
            variant="h5"
            className="text-blue-900 mx-auto text-center mb-4 text-xl md:text-xl"
          >
            Deskripsi Produk
          </Typography>
          <div className="text-sm md:text-lg text-justify">
            EL©K SYSTEM merupakan sebuah sistem untuk membuka kunci kabinet
            dengan menggunakan kartu tanda mahasiswa (berbasis RFID dan NFC) dan
            solenoid lock yang telah dipasangkan pada kabinet tujuan. Sistem ini
            terdiri dari website dan mesin EL©K. Sistem ini akan dipasang
            diantara kedua daun pintu kabinet sehingga dapat difungsikan sebagai
            sistem kunci kabinet.<div className="h-4"></div>Sistem ini
            memungkinkan untuk membuka dan menutup kunci pintu kabinet secara
            otomatis dengan menggunakan parameter UID dari RFID/NFC pada tiap
            kartu tanda mahasiswa sebagai acuan. Mesin EL©K berfungsi sebagai
            perangkat keras pengunci kabinet dan pemindai kartu. Sistem ini juga
            memiliki fitur untuk memonitori catatan pemakaian kabinet serta
            menambahkan/memperbarui/menghapus pengguna yang ditampilkan pada
            antarmuka website.
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default AboutUs;
