import { Card, CardBody, Typography } from '@material-tailwind/react';

const TableData = props => {
  return (
    <>
      <Card>
        {props.dataku}
        <CardBody>
          <Typography
            variant="h5"
            color="blue"
            textGradient
            className="text-lg md:text-xl text-blue-900"
          >
            {props.title}
          </Typography>
          <table className={`w-full mt-2`}>
            <thead className="border-0">
              <tr className="border-0">
                {props.colTitle.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="border-2">{props.dataBody}</tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default TableData;
