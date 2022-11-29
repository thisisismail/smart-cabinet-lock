// import styles from '../styles/Loading.module.css';
import { GiElectric } from 'react-icons/gi';

const Loading = () => {
  return (
    <>
      {/* Centering object */}
      <div className="bg-yellow-500 border-0 border-black absolute w-screen left-0 top-0 h-full">
        <div className="flex items-center justify-center border-0 border-red w-full h-full">
          {/* Get styling data from css file */}
          {/* <div id={styles.current}> */}
          <GiElectric size={100} className="animate-bounce" />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Loading;
