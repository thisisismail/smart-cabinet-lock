import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import Centering from '../components/layouts/Centering';

const FourOhFour = () => {
  return (
    <>
      <Centering>
        <div className="flex flex-col items-center justify-center border-0">
          <Typography variant="h1" className="animate-bounce">
            404
          </Typography>
          <Typography variant="paragraph">
            Page not found.{' '}
            <span className="text-blue-600">
              <Link href="/" className="">
                Back to home
              </Link>
            </span>
          </Typography>
        </div>
      </Centering>
    </>
  );
};

export default FourOhFour;
