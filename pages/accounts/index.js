import useSWR from 'swr';
import Link from 'next/link';
import Table from '../../components/layouts/Table';
import Loading from '../../components/Loading';
import Centering from '../../components/layouts/Centering';
// import LoadingStudentsData from '../components/loadings/LoadingStudentsData';

const endpoint = `${process.env.databaseURL}/users.json`;

// Don't forget to use return for each level to get the value inside
const fetcher = async url => {
  return await fetch(url)
    .then(res => {
      return res.json();
    })
    .catch(error => console.log(error));
};

const Accounts = () => {
  // useSWR provides realtime update, but we should click anywhere within screen to get the update (sometimes)
  const { data, error } = useSWR(endpoint, fetcher);

  if (error)
    return (
      <Centering>
        <h1>Error</h1>
      </Centering>
    );
  if (!data) return <Loading />;

  const accountsData = Object.keys(data)?.map(acc => (
    <Link key={data[acc].rfid} href={`/accounts/${data[acc].rfid}`}>
      <tr className="pt-4 cursor-pointer hover:bg-gray-100">
        <td className="w-max">{data[acc].name}</td>
        <td className="block md:table-cell">{data[acc].npm}</td>
        <td className="block md:table-cell">{data[acc].major}</td>
        <td className="block md:table-cell">{data[acc].lab}</td>
        <td className="block md:table-cell">{data[acc].year}</td>
      </tr>
    </Link>
  ));

  return (
    <>
      <div className="md:hidden">
        <Table
          title="Daftar Mahasiswa"
          colTitle={['Nama', 'Info']}
          dataBody={accountsData}
        />
        <div className="h-20"></div>
      </div>
      <div className="hidden md:block">
        <Table
          title="Daftar Mahasiswa"
          colTitle={['Nama', 'NPM', 'Jurusan', 'Laboratorium', 'Angkatan']}
          dataBody={accountsData}
        />
        <div className="h-20"></div>
      </div>
    </>
  );
};

export default Accounts;
