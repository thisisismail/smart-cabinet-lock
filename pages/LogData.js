import useSWR from 'swr';
import Link from 'next/link';
import { useUser } from '../context/user';
import Table from '../components/layouts/Table';
import Loading from '../components/Loading';
import Centering from '../components/layouts/Centering';
import { timeFormator } from '../services/utils';

const endpoint = `${process.env.databaseURL}/logs.json`;

const fetcher = async url => {
  return await fetch(url)
    .then(res => {
      return res.json();
    })
    .catch(error => console.log(error));
};

const LogData = () => {
  const user = useUser();
  const { uid } = user;
  const { data, error } = useSWR(endpoint, fetcher);

  if (error)
    return (
      <Centering>
        <h1>Error</h1>
      </Centering>
    );

  if (!data) return <Loading />;

  const colTitle = ['Waktu', 'Nama'];

  const logsData = Object.keys(data)
    ?.map(log => {
      return (
        <Link
          key={data[log].time}
          href={uid ? `/accounts/${data[log].uid}` : `#`}
        >
          <tr
            className={`pt-4 ${uid ? 'cursor-pointer' : ''} hover:bg-gray-100`}
          >
            <td className="w-min md:w-max">{timeFormator(data[log].time)}</td>
            {/* <td>{data[log].time}</td> */}
            <td className="w-max">{data[log].name}</td>
          </tr>
        </Link>
      );
    })
    .reverse();

  return (
    <>
      <Table title="Riwayat Akses" colTitle={colTitle} dataBody={logsData} />
    </>
  );
};

export default LogData;
