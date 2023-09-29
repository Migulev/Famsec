'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const blogContent = {
  heading: {
    headingSubTitle: 'Our Writeups',
    headingTitle: 'Our Latest Articles',
    description:
      'We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.',
  },
  recentBlog: [
    {
      href: '#',
      img: '/images/post-1-min.jpg',
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, iusto!',
      descroption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aperiam voluptatibus delectus debitis similique laudantium ratione animi placeat eveniet dolores?',
      author: {
        img: '/images/person-1-min.jpg',
        name: 'Alisa Richardson',
        titleRole: 'Editor, CEO, Co-Founder',
      },
    },
    {
      href: '#',
      img: '/images/post-2-min.jpg',
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, iusto!',
      descroption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aperiam voluptatibus delectus debitis similique laudantium ratione animi placeat eveniet dolores?',
      author: {
        img: '/images/person-2-min.jpg',
        name: 'Jane Cooper',
        titleRole: 'Editor, CEO, Co-Founder',
      },
    },
    {
      href: '#',
      img: '/images/post-3-min.jpg',
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, iusto!',
      descroption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aperiam voluptatibus delectus debitis similique laudantium ratione animi placeat eveniet dolores?',
      author: {
        img: '/images/person-3-min.jpg',
        name: 'Davon McKenny',
        titleRole: 'Editor, CEO, Co-Founder',
      },
    },
    {
      href: '#',
      img: '/images/post-2-min.jpg',
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, iusto!',
      descroption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aperiam voluptatibus delectus debitis similique laudantium ratione animi placeat eveniet dolores?',
      author: {
        img: '/images/person-1-min.jpg',
        name: 'Alisa Richardson',
        titleRole: 'Editor, CEO, Co-Founder',
      },
    },
    {
      href: '#',
      img: '/images/post-1-min.jpg',
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, iusto!',
      descroption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aperiam voluptatibus delectus debitis similique laudantium ratione animi placeat eveniet dolores?',
      author: {
        img: '/images/person-2-min.jpg',
        name: 'Jane Cooper',
        titleRole: 'Editor, CEO, Co-Founder',
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
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isStart, setIsStart] = useState(null);
  const sliderRef = useRef(null);

  const preHandler = useCallback(() => {
    if (!sliderRef.current) return;
  }, []);

  return (
    <section className=" overflow-x-hidden bg-light py-20">
      <div className=" container mx-auto ">
        {/*  */}
        {/* HEADING*/}
        {/*  */}
        <div className="items-center justify-between  lg:flex">
          {/*  */}
          {/* TITLE*/}
          {/*  */}
          <div className=" mb-10 lg:mb-0 lg:w-5/12">
            <span className=" relative z-10 mb-7 inline-block py-0.5 pl-3 font-semibold text-heading before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:w-2/3 before:bg-yellowLight">
              {blogContent.heading.headingSubTitle}
            </span>
            <h2 className=" mb-5 text-2xl font-bold text-heading lg:text-4xl">
              {blogContent.heading.headingTitle}
            </h2>
            <p className=" leading-relaxed text-body">
              {blogContent.heading.description}
            </p>
          </div>
          {/* */}
          {/* CHEVRONS */}
          {/*  */}
          <div className=" text-left lg:w-5/12 lg:text-right"></div>
          <div className="inline-flex gap-3">
            {/* LEFT */}
            <div
              className={`group flex aspect-square w-12 cursor-pointer items-center justify-center rounded-full bg-[#E1E7EA] transition-all duration-300 ease-in-out ${
                isStart
                  ? 'cursor-auto bg-[#E1E7EA] opacity-30'
                  : ' opacity-100 hover:bg-primary'
              }`}
            >
              <BiChevronLeft
                className={` text-3xl text-primary transition-all duration-300 ease-in-out ${
                  isStart
                    ? ' group-hover:text-primary'
                    : ' group-hover:text-white'
                }`}
              />
            </div>
            {/* RIGHT */}
            <div
              className={`group inline-flex aspect-square w-12 cursor-pointer items-center justify-center rounded-full bg-[#E1E7EA] transition-all duration-300 ease-in-out ${
                isStart
                  ? 'cursor-auto bg-[#E1E7EA] opacity-30'
                  : ' opacity-100 hover:bg-primary'
              }`}
            >
              <BiChevronRight
                className={` text-3xl text-primary transition-all duration-300 ease-in-out ${
                  isStart
                    ? ' group-hover:text-primary'
                    : ' group-hover:text-white'
                }`}
              />
            </div>
          </div>
        </div>
        {/*  */}
        {/* SLIDER */}
        {/*  */}
        <Swiper
          ref={sliderRef}
          speed={700}
          breakpoints={{
            640: { width: 640, slidesPerView: 1 },
            768: { width: 768, slidesPerView: 2 },
            1024: { width: 1024, slidesPerView: 2 },
          }}
          className="mb-24 !flex !overflow-visible py-10"
        >
          {blogContent.recentBlog.map((blog, index) => (
            <SwiperSlide key={index}>
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
                <p className=" mb-6">{blog.descroption}</p>
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/*  */}
        {/* CTA */}
        {/*  */}
        <div className=" mx-auto flex items-center justify-center">
          <Link
            href={blogContent.cta.href}
            className=" flex items-center gap-3 rounded-full border px-6 py-3 transition-all duration-300 ease-in-out hover:border-gray-400"
          >
            {blogContent.cta.label}
            <strong className=" pl-1 font-semibold text-primary">
              {blogContent.cta.labelSuffix}
            </strong>
            <span className=" flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <BiChevronRight className=" aspect-square w-6 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
