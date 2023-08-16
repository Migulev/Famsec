import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  text: string;
  href?: string;
  className?: string;
  textColor?: string;
  bgColor?: string;
};

const Button = ({
  text,
  href = '#',
  className,
  textColor = 'text-white',
  bgColor = 'bg-primary hover:bg-primaryDark',
}: Props) => {
  return (
    <Link
      className={cn(
        className,
        textColor,
        bgColor,
        'transform rounded-lg px-5 py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg',
      )}
      href={href}
    >
      {text}
    </Link>
  );
};

export default Button;
