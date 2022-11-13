import { Card, CardBody, Typography } from '@material-tailwind/react';

const LoadingStudentsData = () => {
  const accounts = Array(4).fill(0);

  const ListAccounts = accounts?.map((data, index) => (
    <tr key={index} className="pt-4">
      <td>
        <div className="h-2 bg-slate-200 rounded"></div>
      </td>
      <td>
        <div className="h-2 bg-slate-200 rounded"></div>
      </td>
      <td>
        <div className="h-2 bg-slate-200 rounded"></div>
      </td>
      <td>
        <div className="h-2 bg-slate-200 rounded"></div>
      </td>
      <td>
        <div className="h-2 bg-slate-200 rounded"></div>
      </td>
    </tr>
  ));

  return (
    <>
      <Card className="h-80">
        <CardBody>
          <Typography variant="h5" color="blue" textGradient>
            Data Mahasiswa
          </Typography>
          <table className="w-full mt-2 animate-pulse">
            <thead className="border-0">
              <tr className="border-0">
                <th>Nama</th>
                <th>NPM</th>
                <th>Jurusan</th>
                <th>Laboratorium</th>
                <th>Angkatan</th>
              </tr>
            </thead>
            <tbody className="border-2">{ListAccounts}</tbody>
          </table>
        </CardBody>
      </Card>
      <div className="h-2 bg-slate-200 rounded"></div>
    </>
  );
};

export default LoadingStudentsData;
