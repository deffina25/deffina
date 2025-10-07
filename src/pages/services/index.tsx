import { RunningLine } from '../../components/running-line';
import { Link } from 'react-router-dom';
import { FormAboutYou } from '../../components/form-about-you';
import { BannerServices } from '../../components/banner/BannerServices.tsx';
import RightIcon from './../../assets/icons/right-icon.svg?react';
import reactImg from './../../assets/icons/programming/react.png';
import nextImg from './../../assets/icons/programming/next.png';
import pythonImg from './../../assets/icons/programming/python.png';
import semrushImg from './../../assets/icons/programming/semrush.png';
import qaImg from './../../assets/icons/programming/ga.png';
import intercomImg from './../../assets/icons/programming/intercom.png';
import hubspotImg from './../../assets/icons/programming/hubspot.png';
import gptImg from './../../assets/icons/programming/gpt.png';
import midjourneyImg from './../../assets/icons/programming/midjourney.png';
import img from './../../assets/icons/industries/img.png';
import img1 from './../../assets/icons/industries/img_1.png';
import img2 from './../../assets/icons/industries/img_2.png';
import img3 from './../../assets/icons/industries/img_3.png';
import img4 from './../../assets/icons/industries/img_4.png';
import img5 from './../../assets/icons/industries/img_5.png';
import img6 from './../../assets/icons/industries/img_6.png';
import img7 from './../../assets/icons/industries/img_7.png';
import img8 from './../../assets/icons/industries/img_8.png';
import img9 from './../../assets/icons/industries/img_9.png';

import PlusTitleIcon from './../../assets/icons/title-plus.svg?react';
import { Recommendations } from '../../components/recommendations';
import { useEffect, useState } from 'react';
import axios, { type AxiosResponse } from 'axios';

const Index = () => {
  const [dataRecommendation, setDataRecommendation] = useState<any | null>(
    null,
  );

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/cases-pages', {
        params: {
          populate: { case_item: { populate: '*' } },
          sort: ['createdAt:desc'],
          pagination: { page: 1, pageSize: 4 },
        },
      })
      .then((response: AxiosResponse) => {
        setDataRecommendation(response.data.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных', error);
      });
  }, []);

  return (
    <>
      <div className="relative container mx-auto max-w-[1202px] px-2 md:px-4">
        <div className="relative border-1 border-t-0 border-b-0 border-[#8F8D81]">
          <PlusTitleIcon className="absolute -top-[11px] -left-[13px] -z-10" />
          <BannerServices />
          <PlusTitleIcon className="absolute -top-[11px] -right-[12px] -z-10" />
        </div>
      </div>

      <RunningLine />

      <div className="container mx-auto max-w-[1202px] px-2 md:px-4">
        <div className="wrapper-index text-white">
          <div className="flex items-center justify-center">
            <div className="w-full px-2 py-[48px] text-white md:px-8 md:py-[72px]">
              <h2 className="text-[24px] leading-normal font-semibold text-white md:text-[40px] xl:text-[48px]">
                <span className="text-[#8F8D81]">Deffina’s</span> 5+ senior
                engineers and designers{' '}
                <span className="text-[#8F8D81]">have shipped</span> 25+
                products <span className="text-[#8F8D81]">across</span> 7+
                industries{' '}
                <span className="text-[#8F8D81]">
                  — fast, clean, and battle-tested.
                </span>
                <br />
              </h2>
            </div>
          </div>

          <div className="h-[1px] bg-[#8F8D81]" />
          <div className="grid grid-cols-1 md:grid-cols-[372px_1fr] xl:grid-cols-[372px_1fr]">
            <div className="flex min-h-auto flex-col items-start justify-start border-b border-[#8F8D81] p-2 py-[48px] text-[32px] leading-normal md:min-h-[220px] md:items-start md:border-r md:border-b-0 md:px-8 md:py-[72px]">
              <p className="text-[24px] leading-normal font-bold text-white md:text-[48px]">
                What We Do Best
              </p>
              <p className="text-base">
                We don’t just tick boxes, we partner with you to solve real
                problems, bring clarity to chaos, and deliver quality without
                the drama. Here’s how we do it:
              </p>
            </div>

            <div className="items-start justify-start text-[12px] leading-normal text-white md:text-[20px]">
              <div className="px-2 py-[48px] md:px-8 md:py-[72px]">
                <h3 className="text-[20px] md:text-[28px] xl:text-[32px]">
                  🔧 Web & App Development
                </h3>
                <p className="mt-4 text-[12px] md:text-base xl:text-[20px]">
                  We build clean, reliable digital products that launch fast and
                  evolve with your business. Whether it’s custom web apps,
                  user-first mobile experiences, or backend systems, we’re in it
                  for the long haul, not just the handoff.
                </p>

                <p className="mt-[40px] text-base font-semibold uppercase md:mt-[48px] md:text-[24px] xl:mt-[72px]">
                  Tech stack that we use
                </p>

                <div className="mt-[29px] flex flex-wrap gap-6 md:gap-9">
                  <div className="text-center">
                    <div className="flex h-[60px] w-full justify-center">
                      <img src={reactImg} alt="React" />
                    </div>
                    <p className="mt-4 text-base">React</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-[60px] w-full justify-center">
                      <img src={nextImg} alt="Next.js" />
                    </div>
                    <p className="mt-4 text-base">Next.js</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-[60px] w-full justify-center">
                      <img src={pythonImg} alt="Python" />
                    </div>
                    <p className="mt-4 text-base">Python</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-[60px] w-full justify-center">
                      <img src={reactImg} alt="React" />
                    </div>
                    <p className="mt-4 text-base">React</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-[60px] w-full justify-center">
                      <img src={nextImg} alt="Next.js" />
                    </div>
                    <p className="mt-4 text-base">Next.js</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-[60px] w-full justify-center">
                      <img src={pythonImg} alt="Python" />
                    </div>
                    <p className="mt-4 text-base">Python</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-[60px] w-full justify-center">
                      <img src={reactImg} alt="React" />
                    </div>
                    <p className="mt-4 text-base">React</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-[60px] w-full justify-center">
                      <img src={nextImg} alt="Next.js" />
                    </div>
                    <p className="mt-4 text-base">Next.js</p>
                  </div>
                </div>

                <div className="mt-[40px] md:mt-[48px] xl:mt-[72px]">
                  <Link
                    to="#"
                    className="flex items-center justify-start text-[20px] text-[#4FA8FF] duration-300 hover:underline"
                  >
                    <span>Let’s talk about your build</span>
                    <RightIcon className="ml-[4px]" />
                  </Link>
                </div>
              </div>

              <div className="h-[1px] bg-[#8F8D81]" />
              <div className="px-2 py-[48px] md:px-8 md:py-[72px]">
                <h3 className="text-[20px] md:text-[28px] xl:text-[32px]">
                  📈 Digital Growth & Marketing
                </h3>
                <p className="mt-4 text-[12px] md:text-base xl:text-[20px]">
                  We help teams think beyond launch day with growth strategies
                  that blend product thinking and smart marketing. From
                  onboarding flows to conversion strategy, we’ll help your
                  product earn its keep.
                </p>
                <p className="mt-[40px] text-base font-semibold uppercase md:mt-[48px] md:text-[24px] xl:mt-[72px]">
                  Tech stack that we use
                </p>

                <div className="mt-[29px] flex flex-wrap gap-6 md:gap-9">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex h-[64px] w-[64px] items-center justify-center">
                      <img src={semrushImg} alt="React" />
                    </div>
                    <p className="mt-4 text-base">Semrush</p>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex h-[64px] w-[64px] items-center justify-center">
                      <img src={qaImg} alt="Next.js" />
                    </div>
                    <p className="mt-4 text-base">QA</p>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex h-[64px] w-[64px] items-center justify-center">
                      <img src={intercomImg} alt="Python" />
                    </div>
                    <p className="mt-4 text-base">Intercom</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex h-[64px] w-[125px] items-center justify-center">
                      <img src={hubspotImg} alt="React" />
                    </div>
                    <p className="mt-4 text-base">Hubspot</p>
                  </div>
                </div>

                <div className="mt-[40px] md:mt-[48px] xl:mt-[72px]">
                  <Link
                    to="#"
                    className="flex items-center justify-start text-[20px] text-[#4FA8FF] duration-1000 hover:underline"
                  >
                    <span>Let’s grow it right</span>
                    <RightIcon className="ml-[4px]" />
                  </Link>
                </div>
              </div>
              <div className="h-[1px] bg-[#8F8D81]" />

              <div className="px-2 py-[48px] md:px-8 md:py-[72px]">
                <h3 className="text-[20px] md:text-[28px] xl:text-[32px]">
                  🤖 AI & E-commerce Solutions
                </h3>
                <p className="mt-4 text-[12px] md:text-base xl:text-[20px]">
                  Whether you’re exploring AI features or scaling an online
                  store, we make the complex feel simple. Expect integrations
                  that work, automations that save time, and tools that actually
                  help your team (not confuse them).
                </p>
                <p className="mt-[40px] text-base font-semibold uppercase md:mt-[48px] md:text-[24px] xl:mt-[72px]">
                  Tech stack that we use
                </p>

                <div className="mt-[29px] flex flex-wrap gap-6 md:gap-9">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="h-[64px] w-[64px]">
                      <img src={gptImg} alt="React" />
                    </div>
                    <p className="mt-4 text-base">ChatGPT</p>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="h-[64px] w-[64px]">
                      <div>
                        <img src={midjourneyImg} alt="Next.js" />
                      </div>
                    </div>
                    <p className="mt-4 text-base">Midjourney</p>
                  </div>
                </div>

                <div className="mt-[40px] md:mt-[48px] xl:mt-[72px]">
                  <Link
                    to="#"
                    className="flex items-center justify-start text-[20px] text-[#4FA8FF] duration-300 hover:underline"
                  >
                    <span>Start making it work</span>
                    <RightIcon className="ml-[4px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#8F8D81]" />
          <div className="grid grid-cols-1 gap-[40px] px-2 py-[48px] md:gap-[48px] md:px-8 md:py-[72px] xl:grid-cols-[496px_1fr] xl:gap-[64px]">
            <div>
              <h2 className="text-[24px] md:text-[40px] xl:text-[48px] [&_span]:text-[#8F8D81]">
                <span>Powering</span> 10+ ambitious product teams{' '}
                <span>of all shapes, sizes and</span> industries
              </h2>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[24px] xl:text-[32px]">
                Industries
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-x-[48px] gap-y-4 md:mt-[48px] md:grid-cols-2 xl:mt-[20px] [&_span]:text-base md:[&_span]:text-[20px] xl:[&_span]:text-[24px]">
                <div className="flex items-center justify-start gap-2">
                  <img src={img} alt="" width={24} height={24} />
                  <span>FinTech</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={img1} alt="" width={24} height={24} />
                  <span>Healthcare</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={img2} alt="" width={24} height={24} />
                  <span>AI</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={img3} alt="" width={24} height={24} />
                  <span>eCommerce</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={img4} alt="" width={24} height={24} />
                  <span>SaaS</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={img5} alt="" width={24} height={24} />
                  <span>Marketplaces</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={img6} alt="" width={24} height={24} />
                  <span>Startups & MVPs</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={img7} alt="" width={24} height={24} />
                  <span>EdTech</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={img8} alt="" width={24} height={24} />
                  <span>Fashion</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={img9} alt="" width={24} height={24} />
                  <span>Creative Tools</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#8F8D81]" />
          <div className="px-2 py-[48px] text-center text-[24px] font-semibold md:px-8 md:py-[72px] md:text-[40px] xl:text-[48px]">
            <h2>Why Choose Us? Thanks for Asking!</h2>
          </div>
          <div className="h-[1px] bg-[#8F8D81]" />
          <div className="grid grid-cols-1 text-[12px] md:grid-cols-3 md:text-base xl:text-[20px]">
            <div className="border-r-1 border-b-1 border-[#8F8D81] px-2 py-[48px] md:border-b-0 md:px-8 md:py-[72px]">
              <p>
                You get speed without the chaos. We move fast — but never at the
                cost of clarity. No bloated timelines, no handoff drama.
              </p>
            </div>
            <div className="border-r-1 border-b-1 border-[#8F8D81] px-2 py-[48px] md:border-b-0 md:px-[34px] md:py-[72px]">
              <p>
                You stay focused on what matters. We handle the dev. You focus
                on strategy, fundraising, or just growing your business.
              </p>
            </div>
            <div className="px-2 py-[48px] md:px-[34px] md:py-[72px]">
              <p>
                No buzzwords. No layers of bureaucracy. Just experienced folks
                solving problems alongside you.
              </p>
            </div>
          </div>

          <div className="h-[1px] bg-[#8F8D81]" />
          <div className="flex flex-col items-center justify-between gap-y-[40px] p-[32px] md:gap-[72px] md:gap-y-0 md:p-[37px] xl:flex-row">
            <span className="text-center text-[24px] text-white md:text-left md:text-[40px] xl:text-[48px]">
              Outcomes We’re Proud Of
            </span>
            <Link
              className="flex h-[40px] w-auto items-center justify-center rounded-4xl border border-white bg-white p-4 text-[12px] text-black duration-300 hover:bg-transparent hover:text-white md:h-[60px] md:w-[265px] md:text-[20px]"
              data-discover="true"
              to="/contact-us"
            >
              View All Case Studies
            </Link>
          </div>

          <div className="h-[1px] bg-[#8F8D81]" />
          {dataRecommendation && (
            <Recommendations data={dataRecommendation} top_title={false} />
          )}

          <FormAboutYou />
        </div>
      </div>
    </>
  );
};

export default Index;
