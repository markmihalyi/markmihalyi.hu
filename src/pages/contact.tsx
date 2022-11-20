import { NextPage } from 'next';
import React from 'react';
import { Transition } from '@headlessui/react';
import useLoading from 'common/hooks/useLoading';

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
    <Transition
      show={showText}
      enter="transition-opacity duration-[800ms] delay-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-[500ms]"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="mt-52 hidden flex-col text-center lg:flex">
        <h1 className="mb-7 font-poppins text-4xl font-bold text-light md:text-4xl">
          Do you have a project in mind? Let{"'"}s make it happen!
        </h1>
        <h3 className="text-ellipsis font-poppins text-3xl text-heading">contact@markmihalyi.hu</h3>
      </div>
      <div className="mt-52 flex flex-col text-center lg:hidden">
        <h1 className="font-poppins text-xl font-bold text-light md:text-3xl">
          Do you have a project in mind?
        </h1>
        <h1 className="mb-3 font-poppins text-xl font-bold text-light md:mb-5 md:text-3xl">
          Let{"'"}s make it happen!
        </h1>
        <h3 className="text-ellipsis font-poppins text-base text-heading md:text-2xl">
          contact@markmihalyi.hu
        </h3>
      </div>
    </Transition>
  );
};

export default Contact;
