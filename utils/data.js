const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  // {
  //   name: 'Catatan Akses',
  //   path: '/Logaccess'
  // },
  {
    name: 'Daftar',
    path: '/Registration'
  },
  {
    name: 'Catatan Akses',
    path: '/LogData'
  },
  {
    name: 'Profile',
    path: '/Profile'
  }
];

const formInputs = [
  {
    label: 'Nama Lengkap',
    name: 'name',
    type: 'text'
  },
  {
    label: 'NPM',
    name: 'npm',
    type: 'number'
  },
  {
    label: 'Jurusan',
    name: 'major',
    type: 'text'
  },
  {
    label: 'Angkatan',
    name: 'year',
    type: 'number'
  },
  {
    label: 'Laboratorium',
    name: 'lab',
    type: 'text'
  },
  {
    label: 'Password',
    name: 'password',
    type: null
  },
  {
    label: 'RFID',
    name: 'rfid',
    type: 'text'
  }
];
export { navLinks, formInputs };
