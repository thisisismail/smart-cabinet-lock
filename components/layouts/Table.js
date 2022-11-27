import { Card, CardBody, Typography } from '@material-tailwind/react';

const TableData = props => {
  return (
    <>
      <Card>
        <CardBody>
          <Typography
            variant="h5"
            color="blue"
            textGradient
            className="text-lg md:text-xl"
          >
            {props.title}
          </Typography>
          <table className={`w-full mt-2`}>
            <thead className="border-0">
              <tr className="border-0">
                {props.colTitle.map(col => (
                  <th key={col}>{col}</th>
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
