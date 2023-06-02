import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';
import React from 'react';
import Terminal from '../components/Terminal';
import { Transition } from '@headlessui/react';
import Uses_Heading from 'assets/Uses.png';
import useLoading from '../common/hooks/useLoading';

const Uses: NextPage = () => {
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
        <title>Uses | Márk Mihályi</title>
      </Head>

      <main className="flex flex-col items-center justify-center lg:h-[85vh]">
        <h1 className="mb-5 max-w-[9rem]">
          <Transition
            show={showTitle}
            enter="transition-opacity duration-1000 delay-100"
            enterFrom="transform opacity-0"
            enterTo="transform opacity-100"
            leave="transition-opacity duration-[500ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Image src={Uses_Heading} alt="Uses" draggable={false} priority={true} />
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
            title="markmihalyi.com/uses"
            className="mb-8 w-[95vw] max-w-[1280px] lg:mb-0 lg:w-[92vw] xl:w-[91vw]"
          >
            <div className="h-full px-10 py-10 font-fira-code text-base lg:flex lg:flex-row lg:flex-wrap lg:justify-between xl:py-28 xl:text-xl 2xl:py-32 3xl:py-40">
              <div className="mb-6 flex flex-col text-center lg:mb-0">
                <p className="font-bold tracking-wide text-heading">LAPTOP SPECS</p>
                <p className="mt-1 font-light tracking-tight text-light lg:mt-2">
                  <span className="font-medium">Type:</span> HP Victus 16
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">GPU:</span> Nvidia RTX 3060
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">CPU:</span> Intel Core i5-11400H
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">RAM:</span> 32GB DDR4 3200MHz
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">SSD:</span> 1536GB M.2 NVME
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">OS:</span> Windows 11 Pro
                </p>
              </div>
              <div className="mb-6 flex flex-col text-center lg:ml-12 lg:mb-0">
                <p className="font-bold tracking-wide text-heading">SOFTWARE</p>
                <p className="mt-1 font-light tracking-tight text-light lg:mt-2">
                  <span className="font-medium">Editor:</span> Visual Studio Code
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">Project management:</span> Trello
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">Testing APIs:</span> Insomnia
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">Web design:</span> Figma
                </p>
              </div>
              <div className="mb-6 flex flex-col text-center lg:mb-0">
                <p className="font-bold tracking-wide text-heading">PERIPHERALS</p>
                <p className="mt-1 font-light tracking-tight text-light lg:mt-2">
                  <span className="font-medium">Mouse:</span> Logitech G703
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">Keyboard:</span> Cooler Master CK550
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">Mousepad:</span> HyperX Fury S Pro
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">Microphone:</span> Auna MIC-900B
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">Headphones:</span> Beyerd. DT 770 PRO
                </p>
                <p className="mt-0.5 font-light tracking-tight text-light lg:mt-1">
                  <span className="font-medium">Monitor:</span> Huawei Mateview GT 34
                </p>
              </div>
            </div>
            <p className="-mt-6 pb-3 text-center font-poppins text-xs text-light">
              inspired by{' '}
              <a
                href="https://uses.tech"
                target="_blank"
                rel="noreferrer"
                className="text-code-lightblue"
              >
                uses.tech
              </a>
            </p>
          </Terminal>
        </Transition>
      </main>
    </>
  );
};

export default Uses;
