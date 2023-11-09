import Header from '../components/header/Header';
import NavBar from '../components/navbar/NavBar';

import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <NavBar />
        <div className="flex flex-col justify-center items-center lg:w-[calc(100vw-4rem)] bg-white dark:bg-darkBlackSecondary">
          <picture>
            <source
              srcSet="./error-dark.svg"
              media="(prefers-color-scheme: dark)"
            />
            <Image
              src="/error.svg"
              width={500}
              height={500}
              alt="error image"
            />
          </picture>
          <h1 className="text-5xl font-bold dark:text-white">
            The Page is Empty
          </h1>
        </div>
      </div>
    </div>
  );
}
