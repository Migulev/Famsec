'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { HiBars3 } from 'react-icons/hi2';
import { Button as ScrollButton, Link as ScrollLink } from 'react-scroll';

import { Page } from '@/types/page';
import logo from '../../public/images/logo.svg';
import { Button } from './ui/Button';

const navigationMenu = [
  {
    label: Page.Home,
  },
  {
    label: Page.Stats,
  },
  {
    label: Page.Services,
  },
  {
    label: Page.Solutions,
  },
  {
    label: Page.Testimonials,
  },
  {
    label: Page.Blog,
  },
];

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-40 my-5">
        <div className=" container mx-auto rounded-lg bg-white/90 px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              to={Page.Home}
              className="cursor-pointer"
            >
              <Image src={logo} alt="logo" width={157} height={30} priority />
            </ScrollLink>
            {/* Navigation Menu */}
            <div className="hidden lg:block">
              <ul className="flex gap-7">
                {navigationMenu.map((item) => (
                  <ScrollButton
                    key={item.label}
                    to={item.label}
                    value={item.label}
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    type="submit"
                    activeClass=" text-primary/80 scale-105"
                    className="transform cursor-pointer text-body transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary"
                  />
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
                  <ScrollLink
                    smooth={true}
                    offset={-30}
                    duration={500}
                    to={item.label}
                    onClick={mobileMenuHandler}
                    className="group flex items-center py-2 transition-all duration-300 ease-in-out hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="relative left-2 opacity-0 transition-all duration-300 ease-in-out group-hover:left-3 group-hover:opacity-100">
                      <BiChevronRight className=" text-xl" />
                    </span>
                  </ScrollLink>
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
