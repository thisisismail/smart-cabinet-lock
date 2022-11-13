/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/home',
  //       permanent: true
  //     }
  //   ];
  // },
  env: {
    apiKey: 'AIzaSyAXM39cqFGaeTtAMiePxRw9L8RPZTqVf2Y',
    authDomain: 'smart-cabinet-747fd.firebaseapp.com',
    projectId: 'smart-cabinet-747fd',
    storageBucket: 'smart-cabinet-747fd.appspot.com',
    messagingSenderId: '82524609873',
    appId: '1:82524609873:web:2b44aae71c7ee402d2c770',
    measurementId: 'G-6LKKN60WTL',
    databaseURL:
      'https://smart-cabinet-747fd-default-rtdb.asia-southeast1.firebasedatabase.app'
  }
};

module.exports = nextConfig;
