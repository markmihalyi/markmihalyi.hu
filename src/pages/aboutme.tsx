import { Transition } from '@headlessui/react';
import AboutMe_Heading from 'assets/AboutMe.png';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import useLoading from '../common/hooks/useLoading';
import Terminal from '../components/Terminal';

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
            title="markmihalyi.hu/aboutme"
            className="mb-8 w-[95vw] max-w-[1280px] lg:mb-0 lg:w-[92vw] xl:w-[91vw]"
          >
            <div className="px-10 py-10 text-justify font-fira-code text-base lg:text-xl xl:py-14 2xl:py-16 3xl:py-20">
              <p className="font-bold tracking-wide text-heading">HOW IT ALL BEGAN</p>
              <p className="mt-1 font-light tracking-tight text-light">
                My journey began in childhood, when my father first introduced me to the world of{' '}
                <span className="font-bold">information technology</span>. By the time I was 14, I
                was already experimenting with code, creating custom{' '}
                <span className="font-bold">plugins and scripts</span> for the video games I loved.
                These early projects taught me problem-solving and ignited my passion for building
                things that others could use.
              </p>
              <p className="mt-12 font-bold tracking-wide text-heading">
                WHY I CHOSE WEB DEVELOPMENT
              </p>
              <p className="mt-1 font-light tracking-tight text-light">
                After those early experiments, I craved a new challenge — something that combined
                creativity with technical depth. That’s when I discovered{' '}
                <span className="font-bold">web development</span>, and I was hooked. I started with
                the basics: crafting simple sites using <span className="font-bold">HTML</span> and{' '}
                <span className="font-bold">CSS</span>, then evolved to dynamic applications with{' '}
                <span className="font-bold">PHP</span> and <span className="font-bold">MySQL</span>{' '}
                for backend logic and data management. At 17, I shifted focus to{' '}
                <span className="font-bold">JavaScript</span>, diving deep into frontend development
                and eventually mastering modern frameworks like{' '}
                <span className="font-bold">React.js</span>.
              </p>
              <p className="mt-12 font-bold tracking-wide text-heading">WHERE I AM TODAY</p>
              <p className="mt-1 font-light tracking-tight text-light">
                Today, I’m focused on building{' '}
                <span className="font-bold">scalable, high-performance applications</span> with
                tools like <span className="font-bold">TypeScript</span>,{' '}
                <span className="font-bold">Next.js</span> (for full-stack and server-side
                rendering), and <span className="font-bold">ASP.NET</span> for enterprise-grade
                backend systems. What excites me most is the{' '}
                <span className="font-bold">constant evolution</span> of web technologies — I’m
                always learning, whether it’s optimizing code for efficiency or exploring new
                architectures.
              </p>
              <p className="mt-3 font-light tracking-tight text-light">
                My goal? To write <span className="font-bold">clean, maintainable code</span> that
                not only solves problems but also delights users.
              </p>
            </div>
          </Terminal>
        </Transition>
      </main>
    </>
  );
};

export default AboutMe;
