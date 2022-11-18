import { Typography } from '@material-tailwind/react';
import Link from 'next/link';

const FourOhFour = () => {
  return (
    <>
      <div className="bg-yellow-600 border-0 border-black absolute w-screen left-0 top-0 h-full">
        <div className="flex items-center justify-center border-0 border-red w-full h-full">
          <div className="flex flex-col items-center justify-center border-0">
            <Typography variant="h1" className="animate-bounce">
              404
            </Typography>
            <Typography variant="paragraph">
              Page not found.{' '}
              <div className="text-blue-600 inline">
                <Link href="/" className="">
                  Back to home
                </Link>
              </div>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourOhFour;
