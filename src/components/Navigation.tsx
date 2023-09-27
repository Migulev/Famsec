'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { GrClose } from 'react-icons/gr';
import { BiChevronRight } from 'react-icons/bi';

import logo from '../../public/images/logo.svg';
import { Button } from './ui/Button';

const navigationMenu = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'How we work',
  },
  {
    href: '#',
    label: 'Our mission',
  },
  {
    href: '#',
    label: 'About',
  },
  {
    href: '#',
    label: 'Contact',
  },
];

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="py-7">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={'/'}>
              <Image src={logo} alt="logo" width={157} height={30} />
            </Link>
            {/* Navigation Menu */}
            <div className="hidden lg:block">
              <ul className="flex gap-7">
                {navigationMenu.map((item) => (
                  <li
                    key={item.label}
                    className="transform text-body transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* CTA */}
            <div className="">
              <Button className=" hidden lg:block">Get Started</Button>
              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Bar */}
      <div
        className={`fixed top-0 z-50 min-h-screen w-screen bg-black  ${
          navOpen ? 'bg-opacity-50' : 'pointer-events-none bg-opacity-0'
        }`}
      >
        <div
          className={`fixed right-0 top-0 z-50 min-h-screen min-w-[320px] bg-white ${
            navOpen
              ? 'translate-x-0 duration-300'
              : 'translate-x-full duration-200 '
          } `}
        >
          <div className=" border-b px-10 py-6">
            <button
              className="flex items-center gap-3"
              onClick={mobileMenuHandler}
            >
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="overflow-y-scroll scroll-smooth px-10 py-5">
            <ul>
              {navigationMenu.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center py-2 transition-all duration-300 ease-in-out hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="relative left-2 opacity-0 transition-all duration-300 ease-in-out group-hover:left-3 group-hover:opacity-100">
                      <BiChevronRight className=" text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
