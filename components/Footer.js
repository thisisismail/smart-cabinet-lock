import React from 'react';
import Logo from './Logo';
import { RiInformationFill } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
// import Map from './Map';

const Footer = () => {
  const minWidthBanner = 350;
  return (
    <>
      <div className="mt-auto w-full bg-black flex flex-row items-start justify-between p-8 gap-8 h-full border-0">
        <div className="flex flex-row gap-8">
          <div className="flex flex-col border-white gap-2 items-center w-min border-0">
            <div className="text-gray-600 text-left border-0 border-white w-full font-semibold">
              Diproduksi oleh:
            </div>
            <div
              style={{ minWidth: minWidthBanner }}
              className="flex flex-row border-0 border-white -ml-2 w-min"
            >
              <Logo width={50} height={50} color="gray" />
              <div className="text-gray-600">
                <div>ELECTRICAL LABORATORY LOCK</div>
                <div>TEAM</div>
              </div>
            </div>
            <div className=" text-white py-1d text-justify">
              EL©K TEAM adalah kelompok tugas matakuliah Desain Proyek yang
              beranggotakan empat mahasiswa Teknik Elektro Universitas
              Indonesia.
              <span></span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex gap-8 justify-center h-full border-0 flex-row">
            <div
              // style={{ minWidth: minWidthBanner }}
              className="flex flex-col border-0 border-blue-500 gap-2 text-blue-500 justify-between "
            >
              <div className="text-gray-600 font-semibold flex items-center border-0 gap-2">
                Tentang
                <span className="">
                  <RiInformationFill />
                </span>
              </div>
              <div className="">Tim Kami</div>
              <div className="">Deskripsi produk</div>
              <div className="">Kontak</div>
              <div className="">Laporkan bug</div>
            </div>
          </div>
          <div className="flex flex-col border-0 self-stretch border-blue-500 text-blue-500 gap-2">
            <div className="text-gray-600 font-semibold flex items-center border-0 gap-2">
              Lokasi
              <span className="">
                <MdLocationOn />
              </span>
            </div>
            <div style={{ maxWidth: 300 }} className="flex flex-col gap-2">
              <div className="text-justify text-white">
                Departemen Teknik Elektro, Fakultas Teknik, Universitas
                Indonesia, Jl. Prof. DR. Ir R Roosseno, Kukusan, Beji, Kota
                Depok, Jawa Barat 16425.
                <span>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://goo.gl/maps/zf4pURwnDJmMbsHM7"
                    className="text-blue-500"
                  >
                    (Buka di Google Map)
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-1d text-center py-2">
        Copyright ©2022 EL©K TEAM.
      </div>
    </>
  );
};

export default Footer;
