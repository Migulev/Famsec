'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import ButtonChevron from './ui/ButtonChevron';

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
      description:
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
      description:
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
      description:
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
      description:
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
      description:
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
  const [position, setPosition] = useState(0);
  const minPosition = 0;
  const maxPosition = blogContent.recentBlog.length - 1;

  const handlePrev = () => {
    setPosition((prev) => Math.max(prev - 1, minPosition));
  };

  const handleNext = () => {
    setPosition((prev) => Math.min(prev + 1, maxPosition));
  };

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
          </div>
        </div>
        {/*  */}
        {/* SLIDER */}
        {/*  */}
        <div className="mb-10 flex overflow-hidden py-10">
          {blogContent.recentBlog.map((blog, index) => (
            <div
              key={index}
              style={{
                transform: `translateX(-${position * 100}%)`,
              }}
              className=" w-[300px] shrink-0 px-5 duration-500 sm:w-[450px]"
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
            <span className=" flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <BiChevronRight className=" aspect-square w-6 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
