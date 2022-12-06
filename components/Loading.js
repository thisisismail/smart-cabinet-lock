// import styles from '../styles/Loading.module.css';
import Logo from '../components/Logo';

const Loading = () => {
  return (
    <>
      {/* Centering object */}
      <div className="bg-yellow-500 border-0 border-black absolute w-screen left-0 top-0 h-full">
        <div className="flex items-center justify-center border-0 border-red w-full h-full">
          {/* Get styling data from css file */}
          {/* <div id={styles.current}> */}
          <Logo
            width={200}
            height={200}
            animation={'animate-bounce'}
            color="white"
          />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Loading;
