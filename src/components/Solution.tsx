import Image from 'next/image';
import { BiCheck } from 'react-icons/bi';
import Button from './ui/Button';

const solutionContent = {
  text: {
    headingSubTitle: 'Our Solutions',
    headingTitle:
      'From safeguarding your home with state-of-the-art alarm systems',
    description:
      "From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most – your family's well-being.",
    features: [
      {
        title: 'Home Fire Safety',
      },
      {
        title: 'Cybersecurity Solutions',
      },
      {
        title: 'Emergency Preparedness',
      },
      {
        title: 'Identity Theft Protection',
      },
    ],
    cta: {
      btn1: {
        href: '#',
        label: 'Get Started',
      },
      btn2: {
        href: '#',
        label: 'How It Works?',
      },
    },
  },
  images: {
    img1: '/images/solution-img-1-min.jpg',
    img2: '/images/solution-img-2-min.jpg',
    img3: '/images/solution-img-3-min.jpg',
  },
  experience: {
    years: '25+',
    label: 'years of experience',
  },
};

const Solution = () => {
  return (
    <section className=" overflow-x-hidden bg-light py-32">
      <div className=" container mx-auto justify-between px-4 lg:flex">
        {/* Collage */}
        <div className=" relative z-10 mb-10 before:absolute before:-bottom-20 before:-top-20 before:right-1/2 before:z-[-1] before:w-screen before:rounded-br-3xl before:rounded-tr-[200px] before:bg-white before:py-28 before:content-[''] lg:mb-0 lg:w-6/12">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <Image
                src={solutionContent.images.img1}
                width={626}
                height={640}
                className="w-full rounded-lg object-cover"
                alt="img1"
              />
              <div className="flex justify-end gap-2">
                <div className="flex w-4/12">
                  <span className=" ml-auto h-10 w-10 rounded-2xl rounded-bl-[200px] bg-greenLight lg:h-24 lg:w-24" />
                </div>
                <div className=" w-6/12">
                  <Image
                    src={solutionContent.images.img3}
                    width={626}
                    height={640}
                    alt="img3"
                    className=" w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="  mt-auto flex flex-col gap-2">
              <span className=" h-10 w-10 rounded-2xl rounded-tr-[200px] bg-purpleLight lg:h-20 lg:w-20" />
              <Image
                src={solutionContent.images.img2}
                alt="img2"
                width={547}
                height={573}
                className=" w-full rounded-lg object-cover shadow-2xl"
              />
              <div className=" w-full rounded-lg bg-white p-4 leading-5 shadow-2xl lg:p-10">
                <strong className=" block text-xl font-bold text-primary lg:text-5xl">
                  {solutionContent.experience.years}
                </strong>
                <span>{solutionContent.experience.label}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Text */}
        <div className=" relative z-10 lg:w-5/12">
          <span className=" relative z-50 mb-7 inline-block py-0.5 pl-3 font-semibold text-heading before:absolute before:bottom-0 before:left-0 before:top-0 before:-z-10 before:w-2/3 before:bg-yellowLight before:content-['']">
            {solutionContent.text.headingSubTitle}
          </span>
          <h2 className=" mb-5 text-2xl font-bold text-heading lg:text-4xl">
            {solutionContent.text.headingTitle}
          </h2>
          <p className=" mb-10 leading-relaxed text-body">
            {solutionContent.text.description}
          </p>
          <ul className="mb-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            {solutionContent.text.features.map((item, i) => (
              <li key={i} className="flex flex-grow items-center gap-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                  <BiCheck className=" text-xl text-white" />
                </span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Button
              text={solutionContent.text.cta.btn1.label}
              href={solutionContent.text.cta.btn1.href}
            />
            <Button
              text={solutionContent.text.cta.btn2.label}
              href={solutionContent.text.cta.btn2.href}
              bgColor="bg-secondary hover:bg-secondaryDark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
