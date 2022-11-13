import useSWR from 'swr';
import StudentsData from '../components/StudentsData';
// import LoadingStudentsData from '../components/loadings/LoadingStudentsData';
import Loading from '../components/Loading';

const ourUrl =
  'https://smart-cabinet-747fd-default-rtdb.asia-southeast1.firebasedatabase.app/users.json';

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

  if (error) return 'An error has occurred.';
  if (!data) return <Loading />;

  const ListAccounts = Object.keys(data)?.map(acc => (
    <tr key={data[acc].rfid} className="pt-4">
      <td>{data[acc].name}</td>
      <td>{data[acc].npm}</td>
      <td>{data[acc].major}</td>
      <td>{data[acc].lab}</td>
      <td>{data[acc].year}</td>
    </tr>
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
