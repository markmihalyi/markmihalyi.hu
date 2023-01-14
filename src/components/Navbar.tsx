import { Menu, Transition } from '@headlessui/react';

import { Bars3Icon } from '@heroicons/react/24/solid';
import GitHub from 'assets/GitHub.png';
import Image from 'next/image';
import Link from './Link';
import LinkedIn from 'assets/LinkedIn.png';
import NavbarItem from './NavbarItem';
import React from 'react';
import Twitter from 'assets/Twitter.png';
import useLoading from '../common/hooks/useLoading';
import { useRouter } from 'next/router';

const pages: Array<{ href: string; label: string }> = [
  { href: '/', label: 'Home' },
  { href: '/aboutme', label: 'About me' },
  { href: '/uses', label: 'Uses' },
  { href: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<string>('#');

  const { pathname } = useRouter();

  const { loading, nextPage } = useLoading();

  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  React.useEffect(() => {
    if (loading) {
      setCurrentPage(nextPage.slice(1));
      setShowMobileMenu(false);
    } else {
      setCurrentPage(pathname.slice(1));
    }
  }, [pathname, loading, nextPage]);

  if (currentPage === undefined) {
    return <header className="flex h-[70px] flex-col md:h-16" />;
  }

  return (
    <header className="mx-[4vw] mb-10 mt-[3vw] flex justify-between sm:mx-4 sm:mb-0 md:mx-[2.5vw] lg:mx-[4vw] xl:mx-[4.5vw] 2xl:mx-[7vw] 4xl:mx-[134px]">
      {/* Mobilos navbar */}
      <div className="flex items-center lg:hidden" onClick={handleMobileMenuClick}>
        <Menu>
          <div className="flex flex-col">
            <Menu.Button
              className="float-left flex h-8 w-8 items-center justify-center rounded-[5px] bg-white p-1"
              id="navigation"
              aria-label="Navigation Menu"
            >
              <Bars3Icon className="h-7 w-7 text-black" />
            </Menu.Button>

            <Transition
              show={showMobileMenu}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              className="absolute z-50 mt-10"
            >
              <Menu.Items className="mt-3 inline-flex min-w-[10rem] flex-col rounded-lg bg-light p-2 text-center font-poppins">
                {pages.map((page) => (
                  <Menu.Item key={page.href}>
                    <NavbarItem
                      className="m-1 rounded-md bg-[rgba(0,0,0,0.1)] p-2"
                      href={page.href}
                    >
                      {page.label}
                    </NavbarItem>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </div>
        </Menu>
      </div>

      {/* Navbar */}
      <div className="hidden lg:flex lg:items-center">
        {pages.map((page) => (
          <React.Fragment key={page.href}>
            {currentPage === page.href.slice(1) ? (
              <Link
                href={page.href}
                className="underlined mr-12 font-poppins text-lg text-white transition duration-300"
              >
                {page.label}
              </Link>
            ) : (
              <Link
                href={page.href}
                className="underlined-hover mr-12 font-poppins text-lg text-gray-300 transition duration-300 hover:text-white"
              >
                {page.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Közösségi média gombok */}
      <div className="flex pt-[6px]">
        <a
          className="mr-4 lg:mr-7"
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
          className="mr-4 lg:mr-7"
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
    </header>
  );
};

export default Navbar;
