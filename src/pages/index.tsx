import { Banner } from '../components/banner/Banner.tsx';
import { Link } from 'react-router-dom';
import { FormAboutYou } from '../components/form-about-you';
import { RunningLine } from '../components/running-line';
import { HowWork } from '../components/how-work';
import Start from './../assets/icons/start.svg?react';

export const Index = () => {
  return (
    <div>
      <Banner />
      <RunningLine />
      <div className="w-full">
        <div className="h-[1px] bg-[#8F8D81]" />
        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="wrapper-index">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[670px] px-4 py-[48px] text-center text-white md:py-[72px]">
                <h2 className="text-[20px] leading-normal font-semibold text-white md:text-[30px]">
                  Want this kind of clarity on your product too?
                  <br />
                </h2>
                <h2 className="text-[20px] leading-normal font-semibold text-[#8F8D81] md:text-[30px]">
                  Book a free discovery call and let’s fix what’s not working.
                </h2>

                <Link
                  to="/contact-us"
                  className="mt-[40px] inline-block h-[46px] min-w-[133px] items-center justify-center rounded-4xl border border-white bg-white p-4 text-base leading-4 text-black duration-300 hover:bg-transparent hover:text-white md:mt-[48px] md:h-[60px] md:min-w-[170px] md:text-xl md:leading-normal"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="h-[1px] bg-[#8F8D81]" />
            <div className="grid h-auto grid-cols-1 py-[30px] text-center md:h-[220px] md:grid-cols-3 md:py-0">
              <div className="flex h-full flex-row items-center justify-center gap-2 border-0 border-[#8F8D81] px-8 py-4 text-[20px] leading-normal md:flex-col md:gap-0 md:border-r md:p-8 md:text-[32px]">
                <p className="text-white">4</p>
                <p className="text-[#8F8D81]">Locations</p>
              </div>
              <div className="mdLp-8 flex h-full flex-row items-center justify-center gap-2 border-0 border-[#8F8D81] px-8 py-4 text-[20px] leading-normal md:flex-col md:gap-0 md:border-r md:text-[32px]">
                <p className="text-white">30+</p>
                <p className="text-[#8F8D81]">Engineers</p>
              </div>
              <div className="flex h-full flex-row items-center justify-center gap-2 px-8 py-4 text-[20px] leading-normal md:flex-col md:gap-0 md:p-8 md:text-[32px]">
                <p className="text-white">4</p>
                <p className="text-[#8F8D81]">Languages</p>
              </div>
            </div>
            <div className="h-[1px] bg-[#8F8D81]" />
            <div className="grid grid-cols-1 text-center md:grid-cols-3">
              <div className="col-span-1 flex min-h-auto flex-col items-center justify-center border-b border-[#8F8D81] p-8 text-center text-[32px] leading-normal md:min-h-[220px] md:items-start md:border-r md:border-b-0 md:text-left">
                <p className="text-[24px] leading-normal font-bold text-white md:text-[48px]">
                  What Our Clients Say
                </p>
                <div className="mt-[40px] flex items-center justify-center text-base text-[#4FA8FF] md:mt-[48px]">
                  <div className="mr-1 flex gap-[2px]">
                    <Start />
                    <Start />
                    <Start />
                    <Start />
                  </div>
                  <Link
                    to="/"
                    className="text-base duration-300 hover:underline"
                  >
                    Clutch reviews
                  </Link>
                </div>
              </div>
              <div className="flex min-h-auto flex-col items-center justify-center p-8 text-[12px] leading-normal text-white md:col-span-2 md:min-h-[310px] md:text-[20px]">
                <p>
                  “They didn’t just deliver what we asked for — they helped
                  shape a better solution. Super clear communication, smart
                  suggestions, and everything on time.”
                </p>
                <div className="mt-[43px] flex items-center justify-center md:mt-[53px]">
                  <span className="mr-4 h-[24px] w-[24px] rounded-full bg-[#FD971F] md:h-[32px] md:w-[32px]" />
                  <span className="text-[12px] md:text-base">
                    Leonardo, CEO at Accel
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-[#8F8D81]" />
            <div className="grid grid-cols-1 text-center md:grid-cols-2">
              <div className="flex min-h-auto flex-col items-center justify-center border-b border-[#8F8D81] p-8 text-[12px] leading-normal text-white md:min-h-[310px] md:border-r md:border-b-0 md:text-[20px]">
                <p>
                  “We needed a partner who could move fast and get things right
                  the first time. That’s exactly what we got.”
                </p>
                <div className="mt-[43px] flex items-center justify-center md:mt-[53px]">
                  <span className="mr-4 h-[24px] w-[24px] rounded-full bg-[#4FA8FF] md:h-[32px] md:w-[32px]" />
                  <span className="text-[12px] md:text-base">
                    Daniel, Product Lead
                  </span>
                </div>
              </div>

              <div className="flex min-h-auto flex-col items-center justify-center p-8 text-[12px] leading-normal text-white md:min-h-[310px] md:text-[20px]">
                <p>
                  “Great communication, sharp design, and clean code. The
                  collaboration felt like an extension of our own team.”
                </p>
                <div className="mt-[43px] flex items-center justify-center md:mt-[53px]">
                  <span className="mr-4 h-[24px] w-[24px] rounded-full bg-[#F92672] md:h-[32px] md:w-[32px]" />
                  <span className="text-[12px] md:text-base">
                    Marcin, Head of Growth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="md:flext-col flex flex-row items-center justify-between gap-[40px] border-1 border-[#F92672] bg-[#F92672]/20 p-[37px] md:gap-[72px]">
            <span className="text-center text-[24px] text-white md:text-left md:text-[48px]">
              See What We've Built Together
            </span>
            <Link
              to="/contact-us"
              className="flex h-[40px] w-auto items-center justify-center rounded-4xl border border-white bg-white p-4 text-[12px] text-black duration-300 hover:bg-transparent hover:text-white md:h-[60px] md:w-[265px] md:text-[20px]"
            >
              Explore Case Studies
            </Link>
          </div>
          <HowWork />
        </div>
      </div>
      <div className="container mx-auto max-w-[1202px] px-4">
        <FormAboutYou />
      </div>
    </div>
  );
};

export default Index;
