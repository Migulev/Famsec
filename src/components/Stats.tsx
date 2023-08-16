import { BiChevronRight } from 'react-icons/bi';

const statsContent = {
  stats: [
    {
      number: '99.9',
      label: 'Child Safety Solution',
    },
    {
      number: '3.912',
      label: 'Happy Customers',
    },
    {
      number: '4.5',
      label: 'Rating Review',
    },
  ],
  getStarted: {
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
    <section className=" pb-10 pt-20">
      <div className=" container mx-auto px-4">
        <div className=" items-center justify-between gap-9 lg:flex">
          <div className=" mb-20 w-full lg:mb-0 lg:w-7/12">
            <div className=" grid grid-cols-3">
              {statsContent.stats.map((stat) => (
                <div className=" text-center lg:text-left" key={stat.label}>
                  <strong className=" block text-4xl font-bold leading-tight text-primary xl:text-[52px]">
                    {stat.number}
                  </strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className=" w-full lg:w-5/12">
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
