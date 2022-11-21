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
        className="-mt-24 flex h-screen flex-col items-center justify-center"
        show={showText}
        enter="transition-opacity duration-[800ms] delay-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-[500ms]"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="hidden flex-col text-center lg:flex">
          <h1 className="mb-7 font-poppins text-4xl font-bold text-light">
            Do you have a project in mind? Let{"'"}s make it happen!
          </h1>
          <a
            className="font-poppins text-3xl text-heading transition duration-300 hover:text-[#4efff1] hover:drop-shadow"
            href="mailto:contact@markmihalyi.hu"
          >
            contact@markmihalyi.hu
          </a>
        </div>
        <div className="flex flex-col text-center lg:hidden">
          <h1 className="font-poppins text-[6vw] font-bold text-light md:text-[5vw]">
            Do you have a project in mind?
          </h1>
          <h1 className="mb-6 font-poppins text-[6.5vw] font-bold text-light md:mb-8 md:text-[5.5vw]">
            Let{"'"}s make it happen!
          </h1>
          <a
            className="font-poppins text-[4vw] text-heading transition duration-300 active:text-[#4efff1] md:text-[3.5vw]"
            href="mailto:contact@markmihalyi.hu"
          >
            contact@markmihalyi.hu
          </a>
        </div>
      </Transition>
    </>
  );
};

export default Contact;
