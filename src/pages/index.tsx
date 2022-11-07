import Code from 'components/Code';
import FullStack from 'assets/FullStack.png';
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
import React from 'react';
import Terminal from 'components/Terminal';
import { Transition } from '@headlessui/react';

type Code = {
  className?: string;
  value: string | Array<string>;
};

const codes = new Map<string, Code>();
codes.set('location', { value: 'Hungary' });
codes.set('languages_spoken', { value: ['hu_HU', 'en_US'] });
codes.set('programming_languages', {
  className: 'mt-2 md:mt-3',
  value: ['TypeScript', 'JavaScript'],
});
codes.set('frameworks', { value: ['React', 'Next.js', 'Node.js', 'Express'] });
codes.set('databases', { value: ['MySQL', 'MongoDB'] });
codes.set('soft_skills', {
  className: 'mt-2 md:mt-3',
  value: ['Critical Thinker', 'Problem Solver', 'Teamworker'],
});

const Home: NextPage = () => {
  const [showTitle, setShowTitle] = React.useState(false);
  const [showTerminal, setShowTerminal] = React.useState(false);

  React.useEffect(() => {
    setShowTitle(true);
    setShowTerminal(true);

    return () => {
      setShowTitle(false);
      setShowTerminal(false);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Kezdőlap - Márk Mihályi</title>
      </Head>

      <main className="flex flex-col">
        <div className="mx-32 mt-20 flex flex-col items-center justify-between sm:mt-20 lg:mt-24 2xl:mt-44 2xl:flex 2xl:flex-row">
          <Transition
            show={showTitle}
            enter="transition-opacity duration-[1000ms] delay-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-[1000ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="mb-8 flex flex-col sm:mb-4 2xl:mr-8">
              <h1 className="mb-2 font-poppins text-3xl text-heading sm:mb-4 sm:text-4xl md:mb-6 md:text-5xl 3xl:text-6xl">
                Hi!
              </h1>
              <h1 className="mb-2 font-poppins text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:mb-6 md:text-5xl 3xl:text-6xl">
                I&apos;m Márk Mihályi,
              </h1>
              <span className="w-[22rem] sm:w-[32rem] md:w-[35rem] lg:w-[43rem] 3xl:w-full">
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
            leave="transition duration-[1000ms] ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-90 opacity-0"
          >
            <Terminal
              title="markmihalyi.hu"
              className="w-[23rem] sm:h-[16rem] sm:w-[33.5rem] md:h-[18rem] md:w-[35rem] lg:h-[20rem] lg:w-[40rem] 2xl:h-[24rem] 2xl:w-[45rem] 3xl:h-[26rem]"
            >
              <div className="flex h-full flex-col overflow-auto whitespace-nowrap px-3 py-6 font-jetbrains-mono text-[11px] font-medium sm:mb-0 sm:px-5 sm:py-10 sm:text-xs md:ml-6 md:mt-12 md:py-0 md:px-0 md:text-xs lg:text-sm 2xl:mt-20 3xl:text-base">
                <p>
                  <span className="text-code-red">class </span>
                  <span className="text-code-light">About </span>
                  <span className="text-code-red">extends </span>
                  <span className="text-code-light">Me {'{'}</span>
                </p>
                {Array.from(codes.entries()).map(([property, { className, value }]) => (
                  <Code key={property} className={className} property={property} value={value} />
                ))}
                <p>
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
