const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Catatan Akses',
    path: '/LogData'
  },
  {
    name: 'Data Pengguna',
    path: '/accounts'
  },
  {
    name: 'Daftar',
    path: '/Registration'
  },
  // {
  //   name: 'Test',
  //   path: '/TestLab'
  // },
  {
    name: 'Masuk',
    path: '/SignIn'
  }
];

const loginInputs = [
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Password', name: 'password', type: null }
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
    label: 'Email',
    name: 'email',
    type: 'email'
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

const conversion = {
  months: {
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    id: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember'
    ]
  },
  days: {
    en: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    id: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  }
};

export { navLinks, formInputs, loginInputs, conversion };
