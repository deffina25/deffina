import { Link } from 'react-router-dom';
import { PreFooterMenu } from './module/pre-footer-menu.tsx';
import { RenderNetworks } from './module/pre-footer-netwoks.tsx';
import { preFooterList } from './list/preFooterList.tsx';
import Logo from './../../assets/logo.svg?react';

export const PreFooter = () => {
  return (
    <div className="flex flex-col items-center justify-between border-t-0 border-[#8F8D81] px-2 pt-[48px] pb-[24px] md:flex-row md:px-8 md:pt-[72px] md:pb-[56px] xl:border xl:py-[71px]">
      <Link to="/" className="hidden w-full xl:block xl:w-[150px]">
        <Logo width={150} height={50} />
      </Link>
      <PreFooterMenu data={preFooterList} />
      <Link
        to="/"
        className="mt-[40px] block w-full md:mt-0 md:w-[150px] xl:hidden"
      >
        <Logo width={150} height={50} />
      </Link>
      <div className="hidden items-center justify-between gap-4 xl:flex">
        <RenderNetworks />
      </div>
    </div>
  );
};
