import PlusTitleIcon from './../../assets/icons/title-plus.svg?react';
import { FormAboutYouPhone } from '../../components/form-about-you-phone';
import { FormAboutYou } from '../../components/form-about-you';

const Index = () => {
  return (
    <div className="container mx-auto mt-[119px] max-w-[1202px] px-4 md:mt-[172px]">
      <div className="border-1 border-b-0 border-[#8F8D81]">
        <div className="relative h-full w-full border-b-1 border-[#8F8D81] py-[47px] md:py-[72px]">
          <PlusTitleIcon className="absolute -top-[12px] -left-[13px] -z-10" />
          <h1 className="text-center text-[28px] leading-normal font-bold text-white md:text-[80px]">
            Contact Us
          </h1>
          <PlusTitleIcon className="absolute -top-[12px] -right-[12px] -z-10" />
        </div>
        <FormAboutYou />
        <FormAboutYouPhone />
      </div>
    </div>
  );
};

export default Index;
