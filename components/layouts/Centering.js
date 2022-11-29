const Centering = ({ children }) => {
  return (
    <div className="border-0 border-black absolute w-screen left-0 top-0 h-full">
      <div className="flex items-center justify-center border-0 border-red w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Centering;
