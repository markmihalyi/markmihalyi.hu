import Code from '../components/Code';
import FullStack from 'assets/FullStack.png';
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
import React from 'react';
import Terminal from '../components/Terminal';
import { Transition } from '@headlessui/react';
import useLoading from '../common/hooks/useLoading';

type Code = {
  className?: string;
  value: string | Array<string>;
};

const codes = new Map<string, Code>();
codes.set('location', { value: 'Hungary' });
codes.set('languages_spoken', { value: ['hu_HU', 'en_US'] });
codes.set('programming_languages', { value: ['TypeScript', 'JavaScript'] });
codes.set('technologies', { value: ['React', 'Next.js', 'Express.js', 'Node.js'] });
codes.set('databases', { value: ['MySQL', 'MongoDB'] });

const Home: NextPage = () => {
  const [showTitle, setShowTitle] = React.useState(false);
  const [showTerminal, setShowTerminal] = React.useState(false);

  const { loading } = useLoading();

  React.useEffect(() => {
    if (loading === true) {
      setShowTitle(false);
      setShowTerminal(false);
    } else {
      setShowTitle(true);
      setShowTerminal(true);
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Home | Márk Mihályi</title>
      </Head>

      <main className="flex h-[75vh] flex-col justify-center sm:h-[80vh] md:h-[85vh] lg:h-[85vh]">
        <div className="mx-[7vw] flex flex-col items-center justify-between xl:flex xl:flex-row 4xl:mx-[134px]">
          <Transition
            show={showTitle}
            enter="transition-opacity duration-[1000ms] delay-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-[500ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="mb-2 flex flex-col sm:mb-1 md:mb-3 2xl:mb-0 2xl:mr-8">
              <h1 className="mb-2 select-none font-poppins text-3xl text-heading sm:mb-[0.6vw] sm:text-[5.2vw] md:mb-[1.1vw] md:text-[4.1vw] xl:text-[3.4vw] 3xl:text-6xl 4xl:mb-[21px]">
                Hi!
              </h1>
              <h1 className="mb-2 select-none font-poppins text-3xl font-bold text-white sm:mb-[0.6vw] sm:text-[5.2vw] md:mb-[1.1vw] md:text-[4.1vw] xl:text-[3.4vw] 3xl:text-6xl 4xl:mb-[21px]">
                I am <span className="select-text">Márk Mihályi</span>,
              </h1>
              <span className="w-[90vw] select-none sm:w-[73vw] md:w-[58vw] xl:w-[45vw] 3xl:w-full">
                <Image
                  src={FullStack}
                  alt="Full-Stack Developer."
                  draggable={false}
                  priority={true}
                />
              </span>
            </div>
          </Transition>
          <Transition
            show={showTerminal}
            enter="transition duration-[1000ms] ease-out delay-[900ms]"
            enterFrom="transform scale-90 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition-opacity duration-[500ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Terminal
              title="markmihalyi.com"
              className="h-[45vw] max-h-[490px] w-[92vw] max-w-[1000px] sm:h-[25vw] sm:w-[74vw] md:h-[24vw] md:w-[59vw] xl:h-[18vw] xl:w-[37vw] 4xl:h-[345px] 4xl:w-[710px]"
            >
              <div className="ml-[3vw] flex h-full flex-col justify-center overflow-y-hidden overflow-x-visible whitespace-nowrap font-jetbrains-mono text-xs font-medium sm:ml-[2vw] sm:text-xs md:ml-[2.5vw] md:text-[1.4vw] lg:ml-[1.5vw] lg:text-[1.5vw] xl:text-[0.9vw] 3xl:text-[1.08rem] 4xl:ml-[28.8px]">
                <p className="md:mb-[0.2vw] lg:mb-[0.3vw] 4xl:mb-[5px]">
                  <span className="text-code-red">class </span>
                  <span className="text-code-light">About </span>
                  <span className="text-code-red">extends </span>
                  <span className="text-code-light">Me {'{'}</span>
                </p>
                {Array.from(codes.entries()).map(([property, { className, value }]) => (
                  <Code key={property} className={className} property={property} value={value} />
                ))}
                <p className="md:mt-[0.2vw] lg:mt-[0.3vw] 4xl:mt-[5px]">
                  <span className="text-code-light">{'}'}</span>
                </p>
              </div>
            </Terminal>
          </Transition>
        </div>
      </main>
    </>
  );
};

export default Home;
