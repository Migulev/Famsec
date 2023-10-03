import { framerConfig } from '@/config/framer-motion';
import Image from 'next/image';
import OnViewWrapper from './OnViewWrapper';
import { Button } from './ui/Button';
import { faker } from '@faker-js/faker';

const fakeDescription = faker.lorem.paragraph(5);

const heroContent = {
  text: {
    subheading: 'Welcome to FamSec',
    heading: 'Protecting Families, Securing Futures',
    description: fakeDescription,
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
        <OnViewWrapper
          variants={framerConfig.up}
          transition={framerConfig.delay0}
        >
          <span className=" relative mb-7 inline-block py-0.5 pl-3 font-semibold text-heading before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:w-2/3 before:bg-yellowLight">
            {heroContent.text.subheading}
          </span>
        </OnViewWrapper>
        <OnViewWrapper
          variants={framerConfig.up}
          transition={framerConfig.delay1}
        >
          <h1 className=" mb-7 text-4xl font-bold text-heading lg:text-5xl">
            {heroContent.text.heading}
          </h1>
        </OnViewWrapper>
        <OnViewWrapper
          variants={framerConfig.up}
          transition={framerConfig.delay2}
        >
          <p className=" mb-10 leading-relaxed text-body">
            {heroContent.text.description}
          </p>
        </OnViewWrapper>
        <OnViewWrapper
          variants={framerConfig.up}
          transition={framerConfig.delay3}
          className="flex gap-3"
        >
          <Button>Get Started</Button>
          <Button variant={'secondary'}>How It Works?</Button>
        </OnViewWrapper>
      </div>

      {/*  */}
      {/* Collage  */}
      {/*  */}
      <div className="flex flex-col gap-2 lg:w-6/12">
        <div className="flex gap-2">
          <OnViewWrapper
            variants={framerConfig.right}
            transition={framerConfig.delay0}
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
          </OnViewWrapper>
          <div className=" flex w-4/12 flex-col gap-2 self-end">
            <div className="flex gap-2">
              <OnViewWrapper
                variants={framerConfig.down}
                transition={framerConfig.delay3}
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
              </OnViewWrapper>
              <OnViewWrapper
                variants={framerConfig.appear}
                transition={framerConfig.delay0}
                className="w-1/2 rounded-2xl rounded-tr-[200px] bg-yellowLight"
              />
            </div>
            <OnViewWrapper
              variants={framerConfig.left}
              transition={framerConfig.delay2}
            >
              <Image
                className=" rounded-2xl object-cover"
                alt="img3"
                src={heroContent.images.img3}
                width={374}
                height={392}
                quality={100}
              />
            </OnViewWrapper>
          </div>
        </div>
        <div className="flex gap-2">
          <div className=" w-4/12">
            <div className=" grid grid-cols-2 gap-2">
              <OnViewWrapper
                variants={framerConfig.appear}
                transition={framerConfig.delay0}
                className=" rounded-2xl rounded-bl-[200px] bg-greenLight"
              />
              <OnViewWrapper
                variants={framerConfig.up}
                transition={framerConfig.delay1}
              >
                <Image
                  className="rounded-2xl object-cover "
                  alt="img4"
                  src={heroContent.images.img4}
                  width={394}
                  height={394}
                  quality={100}
                />
              </OnViewWrapper>
            </div>
          </div>
          <OnViewWrapper
            variants={framerConfig.up}
            transition={framerConfig.delay3}
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
          </OnViewWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
