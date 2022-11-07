import { Menu, Transition } from '@headlessui/react';

import { Bars3Icon } from '@heroicons/react/24/solid';
import GitHub from 'assets/GitHub.png';
import Image from 'next/image';
import Link from 'next/link';
import LinkedIn from 'assets/LinkedIn.png';
import NavbarItem from './NavbarItem';
import React from 'react';
import Twitter from 'assets/Twitter.png';
import { useRouter } from 'next/router';

type NavbarItem = {
  href: string;
  label: string;
};

const navbarItems: Array<NavbarItem> = [
  { href: '/', label: 'Home' },
  { href: '/aboutme', label: 'About me' },
  { href: '/uses', label: 'Uses' },
  { href: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<string | undefined>();

  const { pathname } = useRouter();

  React.useEffect(() => {
    setCurrentPage(pathname.slice(1));
  }, [pathname]);

  if (currentPage === undefined) {
    return <header className="flex h-[70px] flex-col md:h-[94px]" />;
  }

  return (
    <header className="flex flex-col">
      <div className="mx-4 mt-8 flex justify-between md:mx-5 md:mt-14 lg:mx-12 xl:mx-32">
        <div className="flex items-center lg:hidden">
          <Menu>
            {({ open }) => (
              <div className="flex flex-col">
                <Menu.Button className="float-left flex h-8 w-8 items-center justify-center rounded-[5px] bg-white p-1">
                  <Bars3Icon className="h-7 w-7 text-black" />
                </Menu.Button>

                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                  className="absolute z-50 mt-10"
                >
                  <Menu.Items className="mt-3 inline-flex min-w-[10rem] flex-col rounded-lg bg-light p-2 text-center font-poppins">
                    {navbarItems.map((item) => (
                      <Menu.Item key={item.href}>
                        <NavbarItem
                          className="m-1 rounded-md bg-[rgba(0,0,0,0.1)] p-2"
                          href={item.href}
                        >
                          {item.label}
                        </NavbarItem>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </div>
            )}
          </Menu>
        </div>

        <div className="hidden lg:flex lg:items-center">
          {currentPage === '' ? (
            <span className="mr-12 border-b-2 border-heading font-poppins text-lg text-white">
              <Link href="/">Home</Link>
            </span>
          ) : (
            <span className="mr-12 font-poppins text-lg text-white">
              <Link href="/">Home</Link>
            </span>
          )}
          {currentPage === 'aboutme' ? (
            <span className="mr-12 border-b-2 border-heading font-poppins text-lg text-white">
              <Link href="/aboutme">About me</Link>
            </span>
          ) : (
            <span className="mr-12 font-poppins text-lg text-white">
              <Link href="/aboutme">About me</Link>
            </span>
          )}
          {currentPage === 'uses' ? (
            <span className="mr-12 border-b-2 border-heading font-poppins text-lg text-white">
              <Link href="/uses">Uses</Link>
            </span>
          ) : (
            <span className="mr-12 font-poppins text-lg text-white">
              <Link href="/uses">Uses</Link>
            </span>
          )}
          {currentPage === 'contact' ? (
            <span className="mr-12 border-b-2 border-heading font-poppins text-lg text-white">
              <Link href="/contact">Contact</Link>
            </span>
          ) : (
            <span className="mr-12 font-poppins text-lg text-white">
              <Link href="/contact">Contact</Link>
            </span>
          )}
        </div>
        <div className="flex">
          <a
            className="mr-4 md:mr-7"
            href="https://linkedin.com/in/markmihalyi/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={LinkedIn}
              alt="LinkedIn"
              draggable={false}
              priority={true}
              width={32}
              height={32}
              layout="fixed"
            />
          </a>
          <a
            className="mr-4 md:mr-7"
            href="https://github.com/markmihalyi"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={GitHub}
              alt="GitHub"
              draggable={false}
              priority={true}
              width={32}
              height={32}
              layout="fixed"
            />
          </a>
          <a href="https://twitter.com/_markmihalyi" target="_blank" rel="noreferrer">
            <Image
              src={Twitter}
              alt="Twitter"
              draggable={false}
              priority={true}
              width={32}
              height={32}
              layout="fixed"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
