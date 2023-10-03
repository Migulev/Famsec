import Image from 'next/image';
import { Button } from './ui/Button';
import OnViewWrapper, { DelayProps } from './OnViewWrapper';

const testimonialContext = {
  heading: {
    headingSubTitle: 'Customers Says...',
    headingTitle: 'Hear What Our Customers Say',
    description:
      'From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with',
  },
  cta: {
    cta_href: '#',
    cta_label: 'Get Started',
  },
  testimonials: [
    {
      img: '/images/person-1-min.jpg',
      person: 'Jane Cooper',
      titleRole: 'Customer - Dallas, TX',
      testimony:
        '“With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!”',
    },
    {
      img: '/images/person-2-min.jpg',
      person: 'Alisa Richardson',
      titleRole: 'Customer - Miami, FL',
      testimony:
        "“Installing Family Home Security was the best decision we made for our family's safety. Their quick response during emergencies gave us peace of mind.”",
    },
    {
      img: '/images/person-3-min.jpg',
      person: 'Davon McKenny',
      titleRole: 'Customer - Seattle, WA',
      testimony:
        '“After moving to a new neighborhood, I felt vulnerable. Thanks to Family Home Security, I can now sleep soundly, knowing our home is well-protected.”',
    },
  ],
};

const Testimonial = () => {
  return (
    <section className=" bg-light py-20">
      <div className=" container mx-auto items-center justify-between px-4 lg:flex">
        {/* CTA */}
        <div className=" mb-10 lg:mb-0 lg:mr-24 lg:w-4/12">
          <OnViewWrapper variants="up" delay="0.0">
            <span className=" relative z-50 mb-7 inline-block py-0.5 pl-3 font-semibold text-heading before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:w-2/3 before:bg-yellowLight before:content-['']">
              {testimonialContext.heading.headingSubTitle}
            </span>
          </OnViewWrapper>
          <OnViewWrapper variants="up" delay="0.1">
            <h2 className=" mb-5 text-2xl font-bold text-heading lg:text-4xl">
              {testimonialContext.heading.headingTitle}
            </h2>
          </OnViewWrapper>
          <OnViewWrapper variants="up" delay="0.2">
            <p className=" mb-10 leading-relaxed text-body">
              {testimonialContext.heading.description}
            </p>
          </OnViewWrapper>
          <OnViewWrapper variants="up" delay="0.3">
            <Button>{testimonialContext.cta.cta_label}</Button>
          </OnViewWrapper>
        </div>
        {/* Testimonials */}
        <div className="items-end gap-0 md:flex md:gap-6 lg:w-8/12">
          <div className=" mb-6 md:mb-0 md:w-6/12">
            {testimonialContext.testimonials.map((item, index) => {
              if (index === 2) return null;
              const delay = (index * 0.1).toFixed(1) as DelayProps['delay'];
              return (
                <OnViewWrapper
                  key={index}
                  variants="up"
                  delay={delay}
                  className={` rounded-lg bg-white p-7 ${
                    index === 1 ? '' : 'mb-6'
                  }`}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className=" relative">
                      <Image
                        src={item.img}
                        height={720}
                        width={579}
                        className=" h-14 w-14 rounded-full object-cover"
                        alt="img"
                      />
                      <span className=" absolute -right-2 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <Image
                          src={'/images/quote.svg'}
                          width={14}
                          height={9}
                          alt="quote"
                        />
                      </span>
                    </div>
                    <div className=" leading-3">
                      <strong className=" block text-lg text-heading">
                        {item.person}
                      </strong>
                      <span className=" text-sm text-body">
                        {item.titleRole}
                      </span>
                    </div>
                  </div>
                  <blockquote>{item.testimony}</blockquote>
                </OnViewWrapper>
              );
            })}
          </div>
          <OnViewWrapper variants="up" delay="0.2" className=" md:w-6/12">
            <span className=" mb-6 hidden h-16 w-16 rounded-full bg-greenLight md:block" />
            <div className=" mb-6 rounded-lg bg-white p-7">
              <div className="mb-4 flex items-center gap-4">
                <div className=" relative">
                  <Image
                    src={testimonialContext.testimonials[2].img}
                    alt="img2"
                    width={579}
                    height={720}
                    className=" h-14 w-14 rounded-full object-cover"
                  />
                  <span className=" absolute -right-2 bottom-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <Image
                      src={'/images/quote.svg'}
                      width={14}
                      height={9}
                      alt="quote"
                    />
                  </span>
                </div>
                <div className=" leading-3">
                  <strong className=" block text-lg text-heading">
                    {testimonialContext.testimonials[2].person}
                  </strong>
                  <span className=" text-sm text-body">
                    {testimonialContext.testimonials[2].titleRole}
                  </span>
                </div>
              </div>
              <blockquote>
                {testimonialContext.testimonials[2].testimony}
              </blockquote>
            </div>
            <span className=" hidden h-10 w-10 rounded-2xl rounded-bl-[200px] bg-[#F27763] md:inline-block lg:h-24 lg:w-24"></span>
          </OnViewWrapper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
