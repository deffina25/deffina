import { useEffect, useState } from 'react';
import { BannerCaseStudies } from '../../components/banner/BannerCaseStudies.tsx';
import { RunningLine } from '../../components/running-line';
import { Box1 } from '../../components/box-1';
import { Box2 } from '../../components/box-2';
import { Box3 } from '../../components/box-3';
import { FormAboutYou } from '../../components/form-about-you';
import axios from 'axios';

export type Items = {
  case_item: {
    id: number;
    image?: {
      url: string;
    };
    title?: string | null;
    text: string;
    alt: string;
  };
  documentId: string;
};

export type Banner = {
  id: number;
  href?: string;
  text: string;
  title: string;
};

const Index = () => {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [firstCases, setFirstCases] = useState<Items[] | null>(null);
  const [secondCases, setSecondCases] = useState<Items[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/cases-pages', {
          params: {
            populate: { case_item: { populate: '*' } },
            sort: ['createdAt:desc'],
            pagination: { page: 1, pageSize: 10 },
          },
        });

        const banner = await axios.get(
          'http://localhost:1337/api/cases-page-banner',
          {
            params: {
              populate: '*',
            },
          },
        );

        const allData = res.data.data;
        const firstData = allData.slice(0, 4);
        const secondData = allData.slice(4, 10);

        setBanner(banner.data.data.case_page_banner);
        setFirstCases(firstData);
        setSecondCases(secondData);
      } catch (error) {
        console.error('Ошибка при загрузке событий', error);
      }
    })();
  }, []);

  return (
    <>
      <div className="relative container mx-auto max-w-[1202px] px-2 md:px-4">
        <BannerCaseStudies data={banner} />
      </div>

      <RunningLine />

      {firstCases && (
        <div className="relative container mx-auto max-w-[1202px] px-2 md:px-4">
          <Box1 data={firstCases} />
        </div>
      )}

      <div className="relative container mx-auto max-w-[1202px] px-2 md:px-4">
        <div className="relative border-1 border-t-0 border-b-0 border-[#8F8D81]">
          <Box2
            text="Want to Be a Part of Our Story?"
            button="Contact Us"
            href="/contact-us"
          />
        </div>

        {secondCases && <Box3 data={secondCases} />}

        <FormAboutYou />
      </div>
    </>
  );
};

export default Index;
