import Image from 'next/image';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import { HiLocationMarker, HiPhone } from 'react-icons/hi';

const footerContent = {
  about: {
    logo: '/images/logo.svg',
    description:
      'From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with us.',
    cta: {
      href: '#',
      label: 'Learn more',
    },
  },
  footerLinks: [
    {
      heading: 'Company',
      links: [
        {
          href: '#',
          label: 'Home',
        },
        {
          href: '#',
          label: 'How we work',
        },
        {
          href: '#',
          label: 'Our mission',
        },
        {
          href: '#',
          label: 'About',
        },
        {
          href: '#',
          label: 'Contacts',
        },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { href: '#', label: 'Blog' },
        { href: '#', label: 'FAQ' },
        { href: '#', label: 'Support' },
        { href: '#', label: 'Terms and Conditions' },
        { href: '#', label: 'Privacy Policy' },
      ],
    },
  ],
  contacts: {
    heading: 'Contact us',
    description:
      'Please feel free to reach out to us with any inquiries, questions, or assistance you may need.',
    address: '1234 North Main Street, Suite #1234, New York, NY 555555',
    phone: '+1 (555) 555-5555',
  },
};

const Footer = () => {
  const rowClasses = 'mb-10 lg:mb-0 lg:w-4/12';

  return (
    <footer role="contentinfo" className=" bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="gap-20 lg:flex">
          {/*  */}
          {/* ABOUT */}
          {/*  */}
          <div className={rowClasses}>
            <Link href={'/'} className=" mb-4 inline-block">
              <Image
                src={footerContent.about.logo}
                width={157}
                height={30}
                alt=""
              />
            </Link>
            <p className=" mb-7 leading-relaxed">
              {footerContent.about.description}
            </p>
            <p>
              <Link
                href={footerContent.about.cta.href}
                className=" group flex items-center gap-2 font-semibold text-primary outline-none"
              >
                <span>{footerContent.about.cta.label}</span>
                <span className=" inline-flex aspect-square w-6 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 ease-in-out group-hover:bg-secondary">
                  <BiChevronRight />
                </span>
              </Link>
            </p>
          </div>
          {/*  */}
          {/* COMPANY & RESOURCES */}
          {/*  */}
          <div className={rowClasses}>
            <div className=" grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, index) => (
                <div key={index}>
                  <h3 className=" mb-5 font-semibold text-heading">
                    {footerLink.heading}
                  </h3>
                  <ul>
                    {footerLink.links?.map((link, index) => (
                      <li key={index} className=" mb-3">
                        <Link
                          href={link.href}
                          className=" group flex items-center transition-all duration-300 ease-in-out hover:text-primary"
                        >
                          <span>{link.label}</span>
                          <span className=" ml-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-3 group-hover:opacity-100">
                            <BiChevronRight />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          {/* CONTACTS */}
          {/*  */}
          <div className="lg:w-4/12">
            <h3 className=" mb-5 font-semibold text-heading">
              {footerContent.contacts.heading}
            </h3>
            <p className=" mb-7 leading-relaxed">
              {footerContent.contacts.description}
            </p>
            <ul>
              <li className=" mb-5 flex gap-3">
                <HiLocationMarker className=" h-6 w-6 text-primary" />
                <span>{footerContent.contacts.address}</span>
              </li>
              <li className=" mb-5 flex gap-3">
                <HiPhone className=" h-6 w-6 text-primary" />
                <span>{footerContent.contacts.phone}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
