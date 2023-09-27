'use client';

import { useCallback, useRef, useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
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
        img: '/image/person-1-min.jpg',
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
        img: '/image/person-2-min.jpg',
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
        img: '/image/person-3-min.jpg',
        name: 'Davon McKenny',
        titleRole: 'Editor, CEO, Co-Founder',
      },
    },
    {
      href: '#',
      img: '/images/post-4-min.jpg',
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, iusto!',
      descroption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aperiam voluptatibus delectus debitis similique laudantium ratione animi placeat eveniet dolores?',
      author: {
        img: '/image/person-1-min.jpg',
        name: 'Alisa Richardson',
        titleRole: 'Editor, CEO, Co-Founder',
      },
    },
    {
      href: '#',
      img: '/images/post-5-min.jpg',
      title:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, iusto!',
      descroption:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aperiam voluptatibus delectus debitis similique laudantium ratione animi placeat eveniet dolores?',
      author: {
        img: '/image/person-2-min.jpg',
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
  const [isEnd, setIsEnd] = useState();
  const [isStart, setIsStart] = useState(true);
  const sliderRef = useRef(null);

  const preHandler = useCallback(() => {
    if (!sliderRef.current) return;
  }, []);

  return (
    <section className=" overflow-x-hidden bg-light py-20">
      <div className=" container mx-auto mb-10 items-center justify-between px-4 lg:flex">
        <div className=" mb-10 lg:mb-0 lg:w-5/12">
          <span className=" relative z-50 mb-7 inline-block py-0.5 pl-3 font-semibold text-heading before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:w-2/3 before:bg-yellowLight before:content-['']">
            {blogContent.heading.headingSubTitle}
          </span>
          <h2 className=" mb-5 text-2xl font-bold text-heading lg:text-4xl">
            {blogContent.heading.headingTitle}
          </h2>
          <p className=" leading-relaxed text-body">
            {blogContent.heading.description}
          </p>
        </div>
        <div className=" text-left lg:w-5/12 lg:text-right">
          <div className=" ml-auto inline-flex gap-3">
            <div
              className={`group inline-flex h-12 w-12 cursor-pointer items-center justify-between rounded-full bg-[#E1E7EA] transition-all duration-300 ease-in-out ${
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
