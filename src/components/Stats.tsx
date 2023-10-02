'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import { motion } from 'framer-motion';

const statsContent = {
  stats: [
    {
      number: '99.9%',
      label: 'Child Safety Solution',
    },
    {
      number: '3.912',
      label: 'Happy Customers',
    },
    {
      number: '4.8',
      label: 'Rating Review',
    },
  ],
  content: {
    heading: 'Get started with our service?',
    description:
      'We understand that protecting your loved ones is of utmost importance',
    img: '/images/illustration-woman.svg',
    cta: {
      cta_href: '#',
      cta_label: 'Learn more',
    },
  },
};

const Stats = () => {
  return (
    <section className=" container mx-auto items-center justify-between gap-9 px-4 pb-10 pt-20 lg:flex">
      <div className=" mb-20 w-full lg:mb-0 lg:w-7/12">
        <div className=" grid grid-cols-3">
          {statsContent.stats.map((item, index) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: 'easeOut',
              }}
              className=" text-center lg:text-left"
            >
              <strong className=" block text-4xl font-bold leading-tight text-primary xl:text-[52px]">
                {item.number}
              </strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" relative rounded-lg bg-light px-7 py-10 pr-28 md:pr-32 lg:w-5/12 lg:px-10 lg:pr-40"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: 'easeOut',
          }}
          className=" absolute -top-14 right-0 lg:right-6"
        >
          <Image
            src={statsContent.content.img}
            alt="img"
            width={1}
            height={1}
            className="w-24"
          />
        </motion.div>
        <motion.h3
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: 'easeOut',
          }}
          className=" mb-3 text-xl font-bold text-heading"
        >
          {statsContent.content.heading}
        </motion.h3>
        <motion.p
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: 'easeOut',
          }}
          className=" mb-5 text-base"
        >
          {statsContent.content.description}
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: 'easeOut',
          }}
        >
          <Link
            href={statsContent.content.cta.cta_href}
            className=" group flex items-center gap-2 font-semibold text-primary outline-none"
          >
            <span>{statsContent.content.cta.cta_label}</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 ease-in-out group-hover:bg-secondary">
              <BiChevronRight className=" text-lg" />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
