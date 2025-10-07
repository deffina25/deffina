import PlusTitleIcon from './../../assets/icons/title-plus.svg?react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/privacy-policy', {
        params: {
          populate: '*',
        },
      })
      .then((res) => {
        setData(res.data.data);
        console.log('data', res.data.data);
      })
      .catch((error) => console.error('Ошибка при загрузке событий', error));
  }, []);

  return (
    <div className="container mx-auto mt-[172px] max-w-[1202px] px-4 text-white">
      <div className="border-1 border-[#8F8D81] pb-[72px]">
        <div className="relative border-b border-[#8F8D81] px-4 py-[49px] text-center text-[28px] leading-0 font-bold md:px-[32px] md:py-[73px] md:text-[56px] lg:text-[80px]">
          <PlusTitleIcon className="absolute -top-[12px] -left-[13px]" />
          <PlusTitleIcon className="absolute -bottom-[13px] -left-[13px]" />
          <span>{data?.title}</span>
          <PlusTitleIcon className="absolute -top-[12px] -right-[12px]" />
          <PlusTitleIcon className="absolute -right-[13px] -bottom-[13px]" />
        </div>
        <div
          className="mt-[48px] px-2 md:mt-[72px] md:px-[32px] [&_h2]:mt-[24px] [&_h2]:mb-4 [&_h2]:text-[24px] [&_h2]:font-semibold md:[&_h2]:mt-[72px] md:[&_h2]:mb-[24px] md:[&_h2]:text-[40px] lg:[&_h2]:text-[48px] [&_h3]:mt-[48px] [&_h3]:mb-[16px] [&_h3]:text-[20px] [&_h3]:font-semibold md:[&_h3]:text-[28px] lg:[&_h3]:text-[32px] [&_li]:list-disc [&_p]:mb-2 [&_p]:text-sm [&_p]:last:mb-0 md:[&_p]:mb-4 md:[&_p]:text-base lg:[&_p]:text-[20px] [&_ul]:pl-[18px] [&_ul]:text-base"
          dangerouslySetInnerHTML={{ __html: data?.text }}
        />
      </div>
    </div>
  );
};

export default Index;
