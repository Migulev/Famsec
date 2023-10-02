'use client';

import Image from 'next/image';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

const heroContent = {
  text: {
    subheading: 'Welcome to FamSec',
    heading: 'Protecting Families, Securing Futures',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae minima quod maiores, debitis possimus natus sapiente consequuntur ab vero facere dolor aut commodi tenetur hic omnis obcaecati sit excepturi assumenda eius fuga et perspiciatis perferendis ratione veniam! Quia, provident vero veritatis dolorem ut culpa magnam illo, voluptate saepe natus quis.',
  },
  images: {
    img1: '/images/hero-img-1-min.jpg',
    img2: '/images/hero-img-2-min.jpg',
    img3: '/images/hero-img-3-min.jpg',
    img4: '/images/hero-img-4-min.jpg',
    img5: '/images/hero-img-5-min.jpg',
  },
};

const Hero = () => {
  return (
    <section className="container mx-auto items-center justify-between px-4 py-20 lg:flex">
      {/*  */}
      {/* Text section */}
      {/*  */}
      <div className="mb-10 lg:mb-0 lg:w-5/12">
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className=" relative mb-7 inline-block py-0.5 pl-3 font-semibold text-heading before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:w-2/3 before:bg-yellowLight"
        >
          {heroContent.text.subheading}
        </motion.span>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          className=" mb-7 text-4xl font-bold text-heading lg:text-5xl"
        >
          {heroContent.text.heading}
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className=" mb-10 leading-relaxed text-body"
        >
          {heroContent.text.description}
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          className="flex gap-3"
        >
          <Button>Get Started</Button>
          <Button variant={'secondary'}>How It Works?</Button>
        </motion.div>
      </div>

      {/*  */}
      {/* Collage  */}
      {/*  */}
      <div className="flex flex-col gap-2 lg:w-6/12">
        <div className="flex gap-2">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-8/12"
          >
            <Image
              className="w-full rounded-2xl object-cover"
              alt="img1"
              src={heroContent.images.img1}
              height={397}
              width={406}
              quality={100}
              priority
            />
          </motion.div>
          <div className=" flex w-4/12 flex-col gap-2 self-end">
            <div className="flex gap-2">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -70 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                className="w-1/2"
              >
                <Image
                  className="rounded-2xl object-cover"
                  alt="img2"
                  src={heroContent.images.img2}
                  width={437}
                  height={437}
                  quality={100}
                />
              </motion.div>
              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className=" w-1/2 rounded-2xl rounded-tr-[200px] bg-yellowLight"
              />
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 70 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              <Image
                className=" rounded-2xl object-cover"
                alt="img3"
                src={heroContent.images.img3}
                width={374}
                height={392}
                quality={100}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className=" w-4/12">
            <div className=" grid grid-cols-2 gap-2">
              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className=" rounded-2xl rounded-bl-[200px] bg-greenLight"
              />
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 70 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              >
                <Image
                  className="rounded-2xl object-cover "
                  alt="img4"
                  src={heroContent.images.img4}
                  width={394}
                  height={394}
                  quality={100}
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 70 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="w-5/12"
          >
            <Image
              alt="img5"
              src={heroContent.images.img5}
              width={446}
              height={495}
              quality={100}
              className="rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
