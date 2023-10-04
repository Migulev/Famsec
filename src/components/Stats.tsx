import Image from 'next/image';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import OnViewWrapper, { DelayProps } from './OnViewWrapper';

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

type Props = {
  id?: string;
};

const Stats = (props: Props) => {
  return (
    <section
      id={props.id}
      className=" container mx-auto items-center justify-between gap-9 px-4 pb-10 pt-10 lg:flex lg:pt-20"
    >
      <div className=" mb-20 w-full lg:mb-0 lg:w-7/12">
        <div className=" grid grid-cols-3">
          {statsContent.stats.map((item, index) => {
            const delay = (index * 0.1).toFixed(1) as DelayProps['delay'];
            return (
              <OnViewWrapper
                key={item.label}
                variants={'up'}
                delay={delay}
                className=" text-center lg:text-left"
              >
                <strong className=" block text-3xl font-bold leading-tight text-primary md:text-4xl xl:text-[52px]">
                  {item.number}
                </strong>
                <span>{item.label}</span>
              </OnViewWrapper>
            );
          })}
        </div>
      </div>
      <OnViewWrapper
        variants={'appear'}
        delay="0.0"
        className=" relative rounded-lg bg-light px-7 py-10 pr-28 md:pr-32 lg:w-5/12 lg:px-10 lg:pr-40"
      >
        <OnViewWrapper
          variants={'right'}
          delay="0.4"
          className=" absolute -top-14 right-0 lg:right-6"
        >
          <Image
            src={statsContent.content.img}
            alt="img"
            width={1}
            height={1}
            className="w-24"
          />
        </OnViewWrapper>
        <OnViewWrapper variants={'left'} delay="0.1">
          <h3 className=" mb-3 text-xl font-bold text-heading">
            {statsContent.content.heading}
          </h3>
        </OnViewWrapper>
        <OnViewWrapper variants={'left'} delay="0.2">
          <p className=" mb-5 text-base">{statsContent.content.description}</p>
        </OnViewWrapper>
        <OnViewWrapper variants={'left'} delay="0.3">
          <Link
            href={statsContent.content.cta.cta_href}
            className=" group flex items-center gap-2 font-semibold text-primary outline-none"
          >
            <span>{statsContent.content.cta.cta_label}</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 ease-in-out group-hover:bg-secondary">
              <BiChevronRight className=" text-lg" />
            </span>
          </Link>
        </OnViewWrapper>
      </OnViewWrapper>
    </section>
  );
};

export default Stats;
