import React from 'react';
import { Switch } from '@material-tailwind/react';
// import { BiArrowBack } from 'react-icons/bi';

const SwitchButton = props => {
  const [animation, setAnimation] = React.useState('');
  const [label, setLabel] = React.useState('');
  const [onlyRenderOnce, setOnlyRenderOnce] = React.useState(1);

  // Only render once algorithm, copyright: https://github.com/thisisismail
  React.useEffect(() => {
    if (onlyRenderOnce < 2) {
      setOnlyRenderOnce(onlyRenderOnce++);
      if (props.editMsg) {
        circleAnimation();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.editMsg]);

  const clickHandler = () => {
    props.onClick();
  };

  const circleAnimation = () => {
    setAnimation('bg-red-600 animate-pulse');
    setLabel('text-red-600');
    setTimeout(() => {
      setAnimation('');
      setLabel('');
    }, 2000);
  };

  return (
    <div className="border-0 border-red-500">
      <Switch
        onClick={() => clickHandler()}
        label={props.editMsg ? `Ketuk untuk edit` : 'Edit'}
        labelProps={{ className: `${label}` }}
        circleProps={{ className: `${animation}` }}
      />
    </div>
  );
};

export default SwitchButton;
