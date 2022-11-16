import { Select, Option } from '@material-tailwind/react';

const SelectInput = props => {
  const OptionsList = props.options.map((data, index) => (
    <Option key={index} value={data}>
      {data}
    </Option>
  ));

  return (
    <Select label={props.label} size="lg" onChange={props.onChange}>
      {OptionsList}
    </Select>
  );
};

export default SelectInput;
