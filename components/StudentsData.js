import { Card, CardBody, Typography } from '@material-tailwind/react';

const StudentsData = props => {
  return (
    <>
      <Card>
        <CardBody>
          <Typography variant="h5" color="blue" textGradient>
            Data Mahasiswa
          </Typography>
          <table className="w-full mt-2">
            <thead className="border-0">
              <tr className="border-0">
                <th>Nama</th>
                <th>NPM</th>
                <th>Jurusan</th>
                <th>Laboratorium</th>
                <th>Angkatan</th>
              </tr>
            </thead>
            <tbody className="border-2">{props.accounts}</tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default StudentsData;
