import React, { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const ButtonChevron = (props: Props) => {
  return (
    <button
      {...props}
      className=" inline-flex aspect-square w-12 cursor-pointer items-center justify-center rounded-full bg-[#E1E7EA] text-3xl text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white disabled:opacity-40 disabled:hover:bg-[#E1E7EA] disabled:hover:text-primary  "
    >
      {props.children}
    </button>
  );
};

export default ButtonChevron;
