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
    name: 'Tambah Pengguna',
    path: '/Registration'
  },
  {
    name: 'Tentang Kami',
    path: '/AboutUs'
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

const features = [
  {
    header: 'Keamanan begitu mudah',
    body: 'Registrasikan kartu identitas favoritmu melalui halaman EL©K lalu pindai kartumu pada mesin EL©K untuk membuka kunci kabinetmu dan Kamu siap belajar dalam laboratorium.'
  },
  {
    header: 'Mesin minimalis untuk kemanan maksimal',
    body: 'Mesin EL©K hadir dengan bentuk dan ukuran yang minimalis untuk mengamankan kabinetmu. Mesin EL©K memiliki desain mekanis dan elektris yang kompak dan kokoh untuk memudahkan pengguna melakukan instlasi.'
  },
  {
    header: 'Pemantauan kapan saja dan dimana saja',
    body: 'EL©K sudah terintegrasi dengan IoT, Kamu bisa dapatkan semua rekaman data pengakses kabinetmu secara realtime di website EL©K kapanpun dan dimanapun.'
  },
  {
    header: 'Akses untuk semua perangkat',
    body: 'Kabar baik, website EL©K sudah didesain secara responsif untuk meningkatkan pengalaman pengguna. Kamu dapat mengkases website EL©K dengan nyaman melalui web browser pada perangkat smartphone, tablet, komputer, dan apapun perangkat favoritmu.'
  },
  {
    header: 'Perbarui data identitas dengan mudah',
    body: 'Perlu memperbarui indentitas pengakses? bukan masalah. Kamu dapat merubah dan menghapus data pada setiap identitas pengakses dengan mudah melalui website EL©K.'
  }
];

const Developers = [
  {
    name: 'Muhammad Dzaki M.',
    position: 'CAD Engineer',
    linkedin: 'https://www.linkedin.com/in/dzakimubarak',
    email: 'dzaki.college@gmail.com',
    img: '/Developer/Dzaki.jpg',
    style: ''
  },
  {
    name: 'Muhammad Fairuz M.',
    position: 'Electronics Engineer',
    linkedin: 'https://www.linkedin.com/in/mfairuzm/',
    email: 'm.fairuzmumtaz@gmail.com',
    img: '/Developer/Fairuz.jpg',
    style: ''
  },
  {
    name: 'Muhammad Nur Ismail',
    position: 'Website Engineer',
    linkedin: 'https://www.linkedin.com/in/muhammad-nur-ismail-555025204',
    email: 'simail.official@gmail.com',
    img: '/Developer/Ismail.jpg',
    style: ''
  },
  {
    name: 'R. W. Andhika',
    position: 'Embedded System Engineer',
    linkedin:
      'https://www.linkedin.com/in/raden-wisnu-andhika-pranidhia-b17a16196',
    email: 'radenwisnu21@gmail.com',
    img: '/Developer/Bobi.jpg',
    style: ''
  }
];

export { navLinks, formInputs, loginInputs, conversion, features, Developers };
