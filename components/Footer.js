import React from 'react';
import Link from 'next/link';
import { RiInformationFill } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
import Logo from './Logo';
// import Map from './Map';

const Footer = () => {
  const minWidthBanner = 350;
  return (
    <>
      <div className="mt-auto w-full bg-black flex flex-col md:flex-row-reverse items-start justify-between md:p-8 p-4 gap-8 h-full border-0">
        <div className="flex flex-col md:flex-row gap-8 text-sm md:text-base">
          <div className="flex gap-8 justify-start md:justify-center h-full border-0 flex-row">
            <div className="flex flex-col border-0 border-blue-500 gap-2 text-blue-500 justify-between w-full">
              <div className="text-gray-600 font-semibold flex items-center border-0 gap-2 border-b-0 border-gray-900 md:border-0">
                Tentang
                <span className="">
                  <RiInformationFill />
                </span>
              </div>
              <Link href="/AboutUs" className="">
                <a>Tim Kami</a>
              </Link>
              <Link href="/AboutUs" className="">
                <a>Deskripsi produk</a>
              </Link>
              <Link href="/AboutUs" className="">
                <a>Kontak</a>
              </Link>
              <Link href="/AboutUs" className="">
                <a>Laporkan bug</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col border-0 self-stretch border-blue-500 text-blue-500 gap-2">
            <div className="text-gray-600 font-semibold flex items-center gap-2 border-b-0 border-gray-900 md:border-0">
              Lokasi
              <span className="">
                <MdLocationOn />
              </span>
            </div>
            <div
              style={{ minWidth: 300 }}
              className="flex flex-col gap-2 border-0 md:w-min"
            >
              <div className="text-justify text-white border-0">
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
        <div className="flex flex-row gap-8">
          <div className="flex flex-col border-white gap-2 items-center w-min border-0">
            <div className="text-gray-600 text-left border-0 w-full font-semibold text-sm md:text-base border-b-0 md:border-0 border-gray-900">
              Dikembangkan oleh
            </div>
            <div
              style={{ minWidth: minWidthBanner }}
              className="flex flex-row border-0 border-white -ml-2 w-min"
            >
              <Logo width={50} height={50} color="gray" />
              <div className="text-gray-600 ">
                <div>ELECTRICAL LABORATORY LOCK</div>
                <div>TEAM</div>
              </div>
            </div>
            <div className=" text-white text-justify text-sm md:text-base">
              EL©K TEAM adalah kelompok tugas matakuliah Desain Proyek yang
              beranggotakan empat mahasiswa Teknik Elektro Universitas
              Indonesia.
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white text-center py-2 text-sm md:text-base">
        Copyright ©2022 EL©K TEAM.
      </div>
    </>
  );
};

export default Footer;
