import BannerBg from './../../assets/banner-services.png';
import { Link } from 'react-router-dom';

export const BannerServices = () => {
  return (
    <div
      className="relative mt-[183px] h-[569px] w-full border-t-1 border-[#8F8D81] bg-contain bg-[center_bottom_0px] bg-no-repeat md:h-[983px]"
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      <div className="relative flex flex-col items-center bg-[#1E1E1E] px-2 py-[24px] text-center text-white md:mt-[72px] md:px-8 md:py-[47px]">
        <h1 className="mb-[16px] text-[28px] leading-normal font-bold text-white md:mb-4 md:text-[56px] xl:mb-[24px] xl:text-[80px]">
          Your Product. Built Right.
        </h1>
        <p className="max-w-[570px] text-base md:text-[20px]">
          From first line of code to final release, we design, build, and ship
          digital products that work — fast, clean, and with zero babysitting.
        </p>
        <Link
          to="/"
          className="mt-[48px] flex h-[46px] min-w-[198px] items-center justify-center rounded-4xl border border-white bg-white p-4 text-base text-black duration-300 hover:bg-transparent hover:text-white md:mt-[48px] md:h-[60px] md:min-w-[250px] md:text-[20px]"
        >
          Let’s Build Together
        </Link>
      </div>
    </div>
  );
};
