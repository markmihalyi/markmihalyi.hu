import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import { Transition } from '@headlessui/react';
import useLoading from '../common/hooks/useLoading';

const Contact: NextPage = () => {
  const [showText, setShowText] = React.useState(false);

  const { loading } = useLoading();

  React.useEffect(() => {
    if (loading === true) {
      setShowText(false);
    } else {
      setShowText(true);
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Contact | Márk Mihályi</title>
      </Head>

      <Transition
        className="flex h-[78vh] flex-col items-center justify-center"
        show={showText}
        enter="transition-opacity duration-[800ms] delay-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-[500ms]"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div role="main" className="hidden flex-col items-center text-center lg:flex">
          <h1 className="font-poppins text-[2vw] font-bold text-light 4xl:text-[38px]">
            Do you have a project in mind? Let{"'"}s make it happen!
          </h1>
          <a
            className="w-max font-poppins text-[1.8vw] text-heading transition duration-300 hover:text-[#4efff1] hover:drop-shadow 4xl:text-[34px]"
            href="mailto:contact@markmihalyi.com"
          >
            contact@markmihalyi.com
          </a>
        </div>
        <div role="main" className="flex flex-col items-center text-center lg:hidden">
          <h1 className="font-poppins text-[5vw] font-bold text-light md:text-[4vw]">
            Do you have a project in mind?
          </h1>
          <h2 className="mb-3 font-poppins text-[7vw] font-bold text-light sm:mb-3 sm:text-[5.8vw] md:mb-4 md:text-[5vw]">
            Let{"'"}s make it happen!
          </h2>
          <a
            className="w-max font-poppins text-[4.5vw] text-heading transition duration-300 active:text-[#4efff1] sm:text-[3.8vw] md:text-[3.2vw]"
            href="mailto:contact@markmihalyi.com"
          >
            contact@markmihalyi.com
          </a>
        </div>
      </Transition>
    </>
  );
};

export default Contact;
