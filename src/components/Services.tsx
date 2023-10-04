import Image from 'next/image';
import OnViewWrapper, { DelayProps } from './OnViewWrapper';

const servicesContent = {
  heading: {
    headingSubTitle: 'Our Awesome Services',
    headingTitles: 'Our Services',
    description:
      "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs.",
  },
  items: [
    {
      icon: 'images/icon-1.svg',
      title: 'Child Safety Solutions',
      description:
        'Childproofing services and safety education to keep your children secure and protected at home and in public spaces.',
    },
    {
      icon: 'images/icon-2.svg',
      title: 'Elderly Care Monitoring',
      description:
        'Innovative technologies for monitoring and caring for elderly family members, promoting their safety and independence.',
    },
    {
      icon: 'images/icon-3.svg',
      title: 'Home Fire Safety',
      description:
        'Childproofing services and safety education to keep your children secure and protected at home and in public spaces.',
    },
    {
      icon: 'images/icon-4.svg',
      title: 'Financial Planning',
      description:
        "Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security.",
    },
    {
      icon: 'images/icon-5.svg',
      title: 'Personal Safety Devices',
      description:
        'Wearable personal safety devices equipped with GPS tracking and emergency alerts for family members on the go.',
    },
    {
      icon: 'images/icon-6.svg',
      title: 'Insurance Coverage',
      description:
        "Tailored insurance policies to protect your family's financial future, including life insurance, health insurance, and property insurance.",
    },
  ],
};

type Props = {
  id?: string;
};

const Services = (props: Props) => {
  return (
    <section id={props.id} className=" bg-light py-20">
      <div className=" container mx-auto px-4">
        <div className=" mx-auto mb-20 max-w-xl text-center">
          <OnViewWrapper variants="up" delay="0.0">
            <span className=" relative z-20 mb-7 inline-block py-0.5 pl-3 font-semibold text-heading before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:w-2/3 before:bg-yellowLight before:content-['']">
              {servicesContent.heading.headingSubTitle}
            </span>
          </OnViewWrapper>
          <OnViewWrapper variants="up" delay={'0.1'}>
            <h1 className=" mb-5 text-2xl font-bold text-heading lg:text-4xl">
              {servicesContent.heading.headingTitles}
            </h1>
          </OnViewWrapper>
          <OnViewWrapper variants="up" delay={'0.2'}>
            <p className=" leading-relaxed text-body">
              {servicesContent.heading.description}
            </p>
          </OnViewWrapper>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {servicesContent.items.map((item, index) => {
            const delay = (index * 0.1).toFixed(1) as DelayProps['delay'];
            return (
              <OnViewWrapper
                key={index}
                variants="up"
                delay={delay}
                className="flex gap-10"
              >
                <div className=" w-14 shrink-0">
                  <span className=" inline-flex h-[70px] w-[70px] items-center justify-between rounded-lg bg-white p-2 shadow-2xl">
                    <Image src={item.icon} width={62} height={62} alt="icon" />
                  </span>
                </div>
                <div>
                  <h3 className=" mb-3 text-base font-bold text-heading">
                    {item.title}
                  </h3>
                  <p className=" leading-relaxed">{item.description}</p>
                </div>
              </OnViewWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
