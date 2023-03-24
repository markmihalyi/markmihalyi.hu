import AboutMe_Heading from 'assets/AboutMe.png';
import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';
import React from 'react';
import Terminal from '../components/Terminal';
import { Transition } from '@headlessui/react';
import useLoading from '../common/hooks/useLoading';

const AboutMe: NextPage = () => {
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
        <title>About me | Márk Mihályi</title>
      </Head>

      <main className="flex flex-col items-center justify-center xl:h-[85vh]">
        <h1 className="mb-5 max-w-[18rem]">
          <Transition
            show={showTitle}
            enter="transition-opacity duration-1000 delay-100"
            enterFrom="transform opacity-0"
            enterTo="transform opacity-100"
            leave="transition-opacity duration-[500ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Image src={AboutMe_Heading} alt="About me" draggable={false} priority={true} />
          </Transition>
        </h1>
        <Transition
          show={showTerminal}
          enter="transition duration-1000 delay-100"
          enterFrom="transform scale-[98%] opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition-opacity duration-[500ms]"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Terminal
            title="markmihalyi.com/aboutme"
            className="mb-8 w-[95vw] max-w-[1280px] lg:mb-0 lg:w-[92vw] xl:w-[91vw]"
          >
            <div className="px-10 py-10 text-justify font-fira-code text-base lg:text-xl xl:py-14 2xl:py-16 3xl:py-20">
              <p className="font-bold tracking-wide text-heading">
                MY CHILDHOOD RELATIONSHIP WITH INFORMATION TECHNOLOGY
              </p>
              <p className="mt-1 font-light tracking-tight text-light">
                Everything started when I was a child, and my father introduced me to the IT world.
                I started learning to program when I was 14. I made some plugins and scripts for
                video games that I liked.
              </p>
              <p className="mt-12 font-bold tracking-wide text-heading">
                THE MOMENT I DECIDED TO BECOME A WEB DEVELOPER
              </p>
              <p className="mt-1 font-light tracking-tight text-light">
                After that, I was looking for another challenge. That was web development, and I
                immediately fell in love with that. At first, I made simple websites with
                <span className="font-bold"> HTML </span> and
                <span className="font-bold"> CSS</span>. Then I started implementing functionalities
                to my websites with <span className="font-bold">PHP</span> and using
                <span className="font-bold"> MySQL</span> to store data securely. When I was 17, I
                switched from PHP to
                <span className="font-bold"> JavaScript</span>. I liked both of them. However, I
                wanted to learn <span className="font-bold">React</span>, so I made the switch.
              </p>
              <p className="mt-12 font-bold tracking-wide text-heading">PRESENT</p>
              <p className="mt-1 font-light tracking-tight text-light">
                I am building web applications with
                <span className="font-bold"> TypeScript</span>,
                <span className="font-bold"> React</span>,
                <span className="font-bold"> Next.js</span>,
                <span className="font-bold"> Express</span> and
                <span className="font-bold"> MySQL</span>, or
                <span className="font-bold"> MongoDB</span>.
              </p>
            </div>
          </Terminal>
        </Transition>
      </main>
    </>
  );
};

export default AboutMe;
