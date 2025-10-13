import { useEffect, useState } from 'react';
import PlusTitleIcon from './../../assets/icons/title-plus.svg?react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatDate } from '../../function/formatDate.tsx';

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
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/blog-pages', {
        params: {
          populate: '*',
          sort: ['createdAt:desc'],
          pagination: { page: 1, pageSize: 10 },
        },
      })
      .then((res) => {
        console.log('res.data.data', res.data.data);
        setData(res.data.data);
      })
      .catch((error) => console.error('Ошибка при загрузке событий', error));
  }, []);

  return (
    <div className="container mx-auto mt-[182px] max-w-[1202px] px-2 text-white md:px-4">
      <div className="border-1 border-[#8F8D81]">
        <div className="relative border-b border-[#8F8D81] px-4 py-[49px] text-center text-[28px] leading-0 font-bold md:px-[32px] md:py-[73px] md:text-[56px] lg:text-[80px]">
          <PlusTitleIcon className="absolute -top-[12px] -left-[13px]" />
          <span>Blog</span>
          <PlusTitleIcon className="absolute -top-[12px] -right-[12px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data?.map(
            (
              { id, blog_item: { title, text }, documentId, updatedAt }: any,
              index: number,
            ) => {
              const isLastCol = (index + 1) % 3 === 0;
              const isLastRow = index >= data.length - (data.length % 3 || 3);
              return (
                <Link
                  key={id}
                  to={String(id) || '#'}
                  state={{ documentId }}
                  data-discover="true "
                  className={`border-r border-b border-[#8F8D81] px-2 py-[48px] md:px-8 xl:py-[72px] ${isLastCol ? 'border-r-0' : ''} ${isLastRow ? 'border-b-0' : ''}`}
                >
                  {title && (
                    <h3 className="text-base leading-[35px] font-normal md:text-[28px] xl:text-[32px]">
                      {title}
                    </h3>
                  )}
                  {text && (
                    <div
                      className="mt-4 text-base"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  )}
                  <div className="mt-[24px] text-[12px] text-[#8F8D81] md:text-base xl:mt-[32px]">
                    {formatDate(updatedAt)}
                  </div>
                </Link>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
