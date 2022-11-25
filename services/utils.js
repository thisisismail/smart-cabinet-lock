import { conversion } from './data';

const convertToId = (type, data) => {
  const index = conversion[type].en.indexOf(data);
  const result = conversion[type].id[index];
  return result;
};

const timeFormator = data => {
  const arr = data.split(' ');
  const month = convertToId('months', arr[1]);
  const day = convertToId('days', arr[0]);
  const result = String(`${arr[4]} WIB ${arr[2]} ${month} ${arr[3]} ${day}`);
  return result;
};

const checkEmail = email => {
  const status = /\S+@ui.ac.id/.test(email) && /\S/.test(email);
  return status;
};

export { convertToId, timeFormator, checkEmail };
