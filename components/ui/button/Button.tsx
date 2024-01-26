import { FC, ReactNode } from 'react';
import Link from 'next/link';

// CSS Import
import './button.css';

interface ButtonProps {
  className: string;
  btnType: 'primary' | 'secondary';
  goTo: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className, btnType, goTo, children }) => {
  return (
    <button className={`${className} btn ${btnType}`}>
      <Link href={`${goTo}`}>{children}</Link>
    </button>
  );
};

export default Button;
