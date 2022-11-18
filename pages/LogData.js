import useSWR from 'swr';
import StudentsData from '../components/StudentsData';
import Link from 'next/link';
import Loading from '../components/Loading';
import Centering from '../components/Centering';
// import LoadingStudentsData from '../components/loadings/LoadingStudentsData';

const ourUrl = `${process.env.databaseURL}/users.json`;

// Don't forget to use return for each level to get the value inside
const fetcher = async url => {
  return await fetch(url)
    .then(res => {
      return res.json();
    })
    .catch(error => console.log(error));
};

const LogData = () => {
  // useSWR provides realtime update, but we should click anywhere within screen to get the update (sometimes)
  const { data, error } = useSWR(ourUrl, fetcher);

  if (error)
    return (
      <Centering>
        <h1>Error</h1>
      </Centering>
    );
  if (!data) return <Loading />;

  const ListAccounts = Object.keys(data)?.map(acc => (
    <Link key={data[acc].rfid} href={`/accounts/${data[acc].rfid}`}>
      <tr className="pt-4 cursor-pointer hover:bg-gray-100">
        <td>{data[acc].name}</td>
        <td>{data[acc].npm}</td>
        <td>{data[acc].major}</td>
        <td>{data[acc].lab}</td>
        <td>{data[acc].year}</td>
      </tr>
    </Link>
  ));

  return (
    <>
      <StudentsData accounts={ListAccounts} />
      <div className="h-20"></div>
      {/* <LoadingStudentsData /> */}
    </>
  );
};

export default LogData;
