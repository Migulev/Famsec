'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useSwipeable } from 'react-swipeable';
import ButtonChevron from './ui/ButtonChevron';
import OnViewWrapper from './OnViewWrapper';

const blogContent = {
  heading: {
    headingSubTitle: 'Our Writeups',
    headingTitle: 'Our Latest Articles',
    description:
      'Utpote victoria canis cogo subseco ambulo deserunt adiuvo adinventitias aer curto celo adduco contabesco voluptatibus caries apto strues administratio angustus testimonium paulatim carbo tergo.',
  },
  recentBlog: [
    {
      href: '#',
      img: '/images/post-1-min.jpg',
      title: 'Adeptio adulatio sordeo claro ustulo.',
      description:
        'Dens acceptus credo adsuesco complectus vicinus verto sufficio tripudio earum causa adeptio spectaculum tenetur tubineus suadeo tergiversatio perspiciatis appello sub adhaero sublime inventore vomito cognatus demoror deludo.',
      author: {
        img: '/images/person-1-min.jpg',
        name: 'Tracy Harris',
        titleRole: 'Legacy Response Assistant',
      },
    },
    {
      href: '#',
      img: '/images/post-2-min.jpg',
      title: 'Stipes subnecto sint vulgo careo.',
      description:
        'Teres asperiores velociter sopor quis cruciamentum deprecator vigilo tricesimus utique admitto alius certus eius addo arx talus harum nihil tam vorago crudelis vomito antiquus numquam.',
      author: {
        img: '/images/person-2-min.jpg',
        name: 'Ella Walter',
        titleRole: 'Chief Accounts Liaison',
      },
    },
    {
      href: '#',
      img: '/images/post-3-min.jpg',
      title: 'Acerbitas universe beneficium curvo ullam.',
      description:
        'Saepe patria ademptio crebro patria velociter qui canis cupressus deludo alias summopere abduco correptius vestigium beneficium victus vado summa sit ustilo.',
      author: {
        img: '/images/person-3-min.jpg',
        name: 'Steve Champlin',
        titleRole: 'National Marketing Officer',
      },
    },
    {
      href: '#',
      img: '/images/post-2-min.jpg',
      title: 'Culpo aro compello clarus quas.',
      description:
        'Nisi aspernatur accendo defero commodi videlicet ars tener valde thalassinus sopor cras alias vomica caelum attollo vilis vis necessitatibus nihil accusantium subseco adduco quo decipio nostrum necessitatibus amo depono.',
      author: {
        img: '/images/person-1-min.jpg',
        name: 'Fannie Ritchie',
        titleRole: 'Corporate Creative Developer',
      },
    },
    {
      href: '#',
      img: '/images/post-1-min.jpg',
      title: 'Cursus anser creo denique auctor.',
      description:
        'Vapulus vita cohibeo nisi alias alienus suus tero accommodo dens subseco caste dicta vis cubitum torrens vergo deleniti atqui hic.',
      author: {
        img: '/images/person-2-min.jpg',
        name: 'Ernest Bernhard-Hirthe',
        titleRole: 'International Research Orchestrator',
      },
    },
  ],
  cta: {
    href: '#',
    label: 'To view all posts',
    labelSuffix: 'click here',
  },
};

const RecentBlog = () => {
  const [position, setPosition] = useState(0);
  const minPosition = 0;
  const maxPosition = blogContent.recentBlog.length - 1;

  const handlePrev = () => {
    setPosition((prev) => Math.max(prev - 1, minPosition));
  };

  const handleNext = () => {
    setPosition((prev) => Math.min(prev + 1, maxPosition));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  return (
    <section className=" bg-light py-20">
      <div className=" container mx-auto px-4 ">
        {/*  */}
        {/* HEADING*/}
        {/*  */}
        <div className="items-center justify-between  lg:flex">
          {/*  */}
          {/* TITLE*/}
          {/*  */}
          <div className=" mb-10 lg:mb-0 lg:w-5/12">
            <OnViewWrapper variants="up" delay="0.0">
              <span className=" relative z-10 mb-7 inline-block py-0.5 pl-3 font-semibold text-heading before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:w-2/3 before:bg-yellowLight">
                {blogContent.heading.headingSubTitle}
              </span>
            </OnViewWrapper>
            <OnViewWrapper variants="up" delay="0.1">
              <h2 className=" mb-5 text-2xl font-bold text-heading lg:text-4xl">
                {blogContent.heading.headingTitle}
              </h2>
            </OnViewWrapper>
            <OnViewWrapper variants="up" delay="0.2">
              <p className=" leading-relaxed text-body">
                {blogContent.heading.description}
              </p>
            </OnViewWrapper>
          </div>
          {/* */}
          {/* CHEVRONS */}
          {/*  */}

          <OnViewWrapper
            variants="left"
            delay="0.3"
            className="inline-flex gap-3"
          >
            <ButtonChevron
              onClick={handlePrev}
              disabled={position === minPosition}
            >
              <BiChevronLeft />
            </ButtonChevron>
            <ButtonChevron
              onClick={handleNext}
              disabled={position === maxPosition}
            >
              <BiChevronRight />
            </ButtonChevron>
          </OnViewWrapper>
        </div>
        {/*  */}
        {/* SLIDER */}
        {/*  */}
        <OnViewWrapper variants="up" delay="0.3">
          <div {...swipeHandlers} className="mb-10 flex overflow-hidden py-10">
            {blogContent.recentBlog.map((blog, index) => (
              <div
                key={index}
                style={{
                  transform: `translateX(-${position * 100}%)`,
                }}
                className=" w-[300px] shrink-0 px-2 duration-500 sm:w-[450px] sm:px-3"
              >
                <div className="mt-10 rounded-lg bg-white p-5">
                  <Link
                    href={blog.href}
                    className="relative -mt-10 mb-4 inline-block rounded-lg"
                  >
                    <Image src={blog.img} width={782} height={467} alt="" />
                  </Link>
                  <h2 className=" mb-5 text-lg font-bold leading-7 text-heading">
                    <Link href={blog.href} className=" text-heading">
                      {blog.title}
                    </Link>
                  </h2>
                  <p className=" mb-6">{blog.description}</p>
                  <div className=" flex items-center gap-4">
                    <div className=" flex-shrink-0">
                      <Image
                        src={blog.author.img}
                        width={50}
                        height={50}
                        className=" aspect-square w-14 rounded-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className=" leading-5">
                      <strong className=" text-primary">
                        {blog.author.name}
                      </strong>
                      <span className=" block text-sm text-body">
                        {blog.author.titleRole}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </OnViewWrapper>

        {/*  */}
        {/* CTA */}
        {/*  */}
        <OnViewWrapper
          variants="up"
          delay="0.4"
          className=" mx-auto flex items-center justify-center"
        >
          <Link
            href={blogContent.cta.href}
            className=" flex items-center gap-3 rounded-full border px-6 py-3 transition-all duration-300 ease-in-out hover:border-gray-400"
          >
            {blogContent.cta.label}
            <strong className=" pl-1 font-semibold text-primary">
              {blogContent.cta.labelSuffix}
            </strong>
            <span className=" flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <BiChevronRight className=" aspect-square w-6 text-white" />
            </span>
          </Link>
        </OnViewWrapper>
      </div>
    </section>
  );
};

export default RecentBlog;
