import Logo from './../../assets/logo.svg?react';
import { MenuTop } from '../menu-top';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="fixed top-0 z-[100] w-full bg-[#1E1E1E] py-[32px] pb-[45px] md:py-[56px] md:pt-[56px]">
      <header className="relative container mx-auto flex h-[32px] max-w-[1202px] items-center justify-between px-2 md:h-[60px] md:px-4">
        <Link to="/">
          <Logo width={150} height={50} />
        </Link>
        <MenuTop />
        <Link
          to="/contact-us"
          className="flex h-[60px] w-[170px] items-center justify-center rounded-4xl border border-white bg-white px-[32px] py-4 text-black duration-300 hover:bg-transparent hover:text-white"
        >
          Contact Us
        </Link>
      </header>
    </div>
  );
}
