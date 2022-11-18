const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
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
  // {
  //   name: 'Test',
  //   path: '/TestLab'
  // }
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
    type: 'text'
  },
  {
    label: 'Jurusan',
    name: 'major',
    type: 'text',
    options: ['Teknik Elektro', 'Teknik Komputer', 'Teknik Biomedik']
  },
  {
    label: 'Angkatan',
    name: 'year',
    type: 'number',
    options: ['2019', '2020', '2021', '2022']
  },
  {
    label: 'Laboratorium',
    name: 'lab',
    type: 'text',
    options: [
      'Kendali',
      'Telekomunikasi',
      'Elektronika',
      'Nanoelektronika',
      'Tegangan Tinggi dan Pengukuran Listrik (TTPL)',
      'Laboratorium Konversi Energi Listrik (LKEL)',
      'Sistem Tenaga Listrik',
      'Digital',
      'Jaringan',
      'Biomedis'
    ]
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
