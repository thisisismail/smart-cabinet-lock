import React from 'react';

const Map = () => {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31720.667133451843!2d106.83303659488332!3d-6.383237809588807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec192c30aa47%3A0x72f29bad0571e98c!2sFaculty%20of%20Engineering%20Universitas%20Indonesia!5e0!3m2!1sen!2sid!4v1670496100117!5m2!1sen!2sid"
          // width={400}
          // height={120}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl w-full"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
