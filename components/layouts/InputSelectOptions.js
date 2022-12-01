import { Select, Option } from '@material-tailwind/react';

const SelectInput = props => {
  const OptionsList = props.options.map((data, index) => (
    <Option
      key={index}
      // Option Select tag returns value attribute only (string)
      value={JSON.stringify({ name: props.name, value: data })}
    >
      {data}
    </Option>
  ));

  return (
    <Select label={props.label} size="lg" onChange={props.onChange} className="rounded-md">
      {OptionsList}
    </Select>
  );
};

export default SelectInput;
