import Loading from '../components/Loading';

export default function Home() {
  return (
    <>
      {/* <div className="flex justify-center items-center">Home</div>
        <button
          className="btn bg-teal-400 rounded-lg p-2"
          onClick={() => {
            getAccounts().then(response => console.log(response));
          }}
        >
          Get Accounts
        </button>
        <button
          className="btn bg-teal-400 rounded-lg p-2"
          onClick={() => {
            getRFID();
          }}
        >
          Read RFID
        </button>
        <button
          className="btn bg-teal-400 rounded-lg p-2"
          onClick={() => {
            getStatusRFID().then(res => console.log(res));
          }}
        >
          Read Status RFID
        </button>
        <button
          className="btn bg-teal-400 rounded-lg p-2"
          onClick={() => {
            getStatusMessage().then(res => console.log(res));
          }}
        >
          Read Status Message
        </button> */}
      <Loading />
    </>
  );
}
