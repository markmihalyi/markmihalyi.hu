import AboutMe_Heading from 'assets/AboutMe.png';
import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';
import React from 'react';
import Terminal from 'components/Terminal';
import { Transition } from '@headlessui/react';

const AboutMe: NextPage = () => {
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
        <title>About me - Márk Mihályi</title>
      </Head>

      <div className="mt-12 flex flex-col items-center justify-center sm:mt-4 md:mt-4 lg:mt-10 xl:mt-16 2xl:mt-16">
        <span className="mb-5 max-w-[18rem]">
          <Transition
            show={showTitle}
            enter="transition duration-[700ms] ease-out delay-100"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-[700ms] ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Image src={AboutMe_Heading} alt="About me" draggable={false} priority={true} />
          </Transition>
        </span>
        <Transition
          show={showTerminal}
          enter="transition duration-[700ms] ease-out delay-100"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-[700ms] ease-out delay-[500ms]"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Terminal
            title="markmihalyi.hu/aboutme"
            className="mb-8 w-[23rem] sm:w-[40rem] md:w-[48rem] lg:mb-0 lg:w-[65rem] xl:w-[80rem] 2xl:w-[85rem] 3xl:w-[85rem]"
          >
            <div className="px-10 py-10 font-fira-code text-base lg:text-xl xl:py-14 2xl:py-16 3xl:py-20">
              <p className="font-bold tracking-wide text-heading">
                MY CHILDHOOD RELATION WITH INFORMATION TECHNOLOGY
              </p>
              <p className="mt-1 font-light tracking-tight text-light">
                Everything started when I was a child and my father introduced me to the IT world. I
                started learning to program when I was 14. I made quite a few plugins, scripts for
                video games that I liked.
              </p>
              <p className="mt-12 font-bold tracking-wide text-heading">
                THE MOMENT I DECIDED TO BECOME A WEB DEVELOPER
              </p>
              <p className="mt-1 font-light tracking-tight text-light">
                After that, I was looking for another challenge. That was web development and I
                immediately fell in love with that. At first, I made simple websites with
                <span className="font-bold"> HTML </span>
                and
                <span className="font-bold"> CSS</span>. Then I started to implement functionalities
                to my websites with PHP and I started using
                <span className="font-bold"> MySQL </span>
                for storing data securely. When I was 17, I switched from PHP to
                <span className="font-bold"> JavaScript </span>I liked both of them, however, I
                wanted to learn <span className="font-bold">React</span>, so I decided to switch.{' '}
                <br className="hidden 2xl:block" />
                In retrospect, that was a fantastic decision.
              </p>
              <p className="mt-12 font-bold tracking-wide text-heading">PRESENT</p>
              <p className="mt-1 font-light tracking-tight text-light">
                Nowadays I{"'"}m building web applications with
                <span className="font-bold"> TypeScript</span>,
                <span className="font-bold"> Next.js (React)</span>,
                <span className="font-bold"> Express </span>
                and
                <span className="font-bold"> MySQL </span>or
                <span className="font-bold"> MongoDB</span>.
              </p>
            </div>
          </Terminal>
        </Transition>
      </div>
    </>
  );
};

export default AboutMe;
