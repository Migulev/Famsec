import Button from './ui/Button';
import Image from 'next/image';

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
      {/* Text section */}
      <div className="mb-10 lg:mb-0 lg:w-5/12">
        <span className=" relative mb-7 inline-block py-0.5 pl-3 font-semibold text-heading before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:w-2/3 before:bg-yellowLight before:content-['']">
          {heroContent.text.subheading}
        </span>
        <h1 className=" mb-7 text-4xl font-bold text-heading lg:text-5xl">
          {heroContent.text.heading}
        </h1>
        <p className=" mb-10 leading-relaxed text-body">
          {heroContent.text.description}
        </p>
        <div className="flex gap-3">
          <Button text="Get Started" />
          <Button
            text="How It Works?"
            bgColor="bg-secondary hover:bg-secondaryDark"
          />
        </div>
      </div>

      {/* Collage  */}
      <div className="flex flex-col gap-2 lg:w-6/12">
        <div className="flex gap-2">
          <div className="w-8/12">
            <Image
              className="w-full rounded-2xl object-cover"
              alt="img1"
              src={heroContent.images.img1}
              height={397}
              width={406}
              quality={100}
              priority
            />
          </div>
          <div className=" flex w-4/12 flex-col gap-2 self-end">
            <div className="flex gap-2">
              <div className="w-1/2">
                <Image
                  className="rounded-2xl object-cover"
                  alt="img2"
                  src={heroContent.images.img2}
                  width={437}
                  height={437}
                  quality={100}
                />
              </div>
              <span className=" w-1/2 rounded-2xl rounded-tr-[200px] bg-yellowLight" />
            </div>
            <Image
              className=" rounded-2xl object-cover"
              alt="img3"
              src={heroContent.images.img3}
              width={374}
              height={392}
              quality={100}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className=" w-4/12">
            <div className=" grid grid-cols-2 gap-2">
              <span className=" rounded-2xl rounded-bl-[200px] bg-greenLight" />
              <Image
                className="rounded-2xl object-cover "
                alt="img4"
                src={heroContent.images.img4}
                width={394}
                height={394}
                quality={100}
              />
            </div>
          </div>
          <Image
            className="w-5/12 rounded-2xl object-cover"
            alt="img5"
            src={heroContent.images.img5}
            width={446}
            height={495}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
