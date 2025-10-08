import { useEffect, useState } from 'react';

import { MenuTop } from '../menu-top';
import { Link, useLocation } from 'react-router-dom';
import { MobileMenuTop } from '../mobile-menu-top';
import Logo from './../../assets/logo.svg?react';
import Menu from './../../assets/icons/menu.svg?react';
import Close from './../../assets/icons/close.svg?react';

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location]);

  return (
    <div className="fixed top-0 z-[100] w-full bg-[#1E1E1E] py-[24px] pb-[45px] md:py-[56px] md:pt-[56px]">
      <header className="relative container mx-auto flex h-[32px] max-w-[1202px] items-center justify-between px-4 md:h-[50px] md:px-8 xl:h-[60px] xl:px-2">
        <Link to="/">
          <Logo width={150} height={50} />
        </Link>

        <div className="hidden xl:flex">
          <MenuTop />
        </div>

        <div className="flex cursor-pointer items-center justify-center xl:hidden">
          {!isOpenMenu ? (
            <Menu onClick={() => setIsOpenMenu(true)} />
          ) : (
            <Close onClick={() => setIsOpenMenu(false)} />
          )}
        </div>

        {isOpenMenu && <MobileMenuTop />}

        <Link
          to="/contact-us"
          className="hidden h-[60px] w-[170px] items-center justify-center rounded-4xl border border-white bg-white px-[32px] py-4 text-black duration-300 hover:bg-transparent hover:text-white xl:flex"
        >
          Contact Us
        </Link>
      </header>
    </div>
  );
}
