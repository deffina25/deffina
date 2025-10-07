import { useEffect, useState } from 'react';
import axios, { type AxiosResponse } from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { formatDate } from '../../../function/formatDate.tsx';

const Index = () => {
  const location = useLocation();
  const { documentId } = location.state || {};
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/blog-pages/${documentId}`, {
        params: {
          populate: {
            blog_item: { populate: '*' },
            box_item: {
              populate: {
                blog_item: {
                  populate: ['image'],
                },
              },
            },
            box_2_page: { populate: '*' },
            image_page_1: { populate: '*' },
            image_page_2: { populate: '*' },
            image_page_3: { populate: '*' },
            text_page_2: { populate: '*' },
            text_page_3: { populate: '*' },
            text_page_4: { populate: '*' },
            text_page_5: { populate: '*' },
            title_page: { populate: '*' },
          },
        },
      })
      .then((response: AxiosResponse) => {
        console.log('response.data.data', response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных', error);
      });
  }, []);

  const {
    box_item,
    box_2_page,
    image_page_1,
    image_page_2,
    image_page_3,
    text_page_2,
    text_page_3,
    text_page_4,
    text_page_5,
    title_page,
    text_page_1,
  } = data || {};

  console.log('data', data);

  return (
    data && (
      <>
        <div className="container mx-auto mt-[172px] max-w-[1202px] px-4 md:mt-[172px]">
          <div className="flex flex-col items-center justify-center px-8 text-center">
            <p className="text-[20px] text-[#8F8D81]">{title_page?.path}</p>
            <h2 className="mt-4 max-w-[850px] text-[48px] font-semibold">
              {title_page?.title}
            </h2>
          </div>
        </div>

        <div className="container mx-auto max-w-[1202px] px-4">
          <div
            className="mt-[72px] flex w-full justify-center border px-8 pt-[48px]"
            style={{
              backgroundColor: image_page_1?.background_color
                ? `${image_page_1.background_color}33`
                : undefined,
              borderColor: image_page_1?.border_color || undefined,
            }}
          >
            <img
              src={`${import.meta.env.VITE_API_URL}${image_page_1?.image?.url}`}
              alt={image_page_1?.image?.alt || ''}
            />
          </div>
        </div>

        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="border-r-1 border-l-1 border-[#8F8D81] px-8">
            <div
              className="font-semibold] py-[72px] [&_p]:text-[32px]"
              dangerouslySetInnerHTML={{ __html: text_page_1 }}
            />
          </div>

          {/*<div className="border-t-1 border-[#8F8D81]">*/}
          {/*  <div className="border-r-1 border-l-1 border-[#8F8D81] px-8 pt-[72px] pb-[48px]">*/}
          {/*    <h2 className="text-center text-[48px] font-semibold">*/}
          {/*      {box_1_page.title}*/}
          {/*    </h2>*/}
          {/*  </div>*/}
          {/*  <div className="grid grid-cols-3 divide-x divide-[#8F8D81] border border-[#8F8D81]">*/}
          {/*    {box_1_page?.box_1_item?.map(({ id, text, title }: any) => (*/}
          {/*      <div*/}
          {/*        key={id}*/}
          {/*        className="px-8 py-[48px] text-center text-[32px] font-semibold"*/}
          {/*      >*/}
          {/*        <p>{title}</p>*/}
          {/*        <p className="text-[#8F8D81]">{text}</p>*/}
          {/*      </div>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="border-r-1 border-l-1 border-[#8F8D81] px-8 py-[72px]">
            <div className="font-semibold [&_h2]:text-[48px] [&_p]:text-[20px]">
              <h2>{text_page_2?.h2}</h2>
              <div
                className="mt-[24px]"
                dangerouslySetInnerHTML={{ __html: text_page_2?.text }}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1202px] px-4">
          <div
            className="flex w-full justify-center border px-8 pt-[48px]"
            style={{
              backgroundColor: image_page_2?.background_color
                ? `${image_page_2.background_color}33`
                : undefined,
              borderColor: image_page_2?.border_color || undefined,
            }}
          >
            <img
              src={`${import.meta.env.VITE_API_URL}${image_page_2?.image?.url}`}
              alt={image_page_2?.image?.alt || ''}
            />
          </div>
        </div>

        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="border-r-1 border-l-1 border-[#8F8D81] px-8 py-[72px]">
            <div className="font-semibold [&_h2]:text-[48px] [&_p]:text-[20px]">
              <h2>{text_page_3?.h2}</h2>
              <div
                className="mt-[24px]"
                dangerouslySetInnerHTML={{ __html: text_page_3?.text }}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1202px] px-4">
          <div
            className="flex flex-row items-center justify-between gap-[40px] border p-[37px] md:flex-col md:gap-[72px]"
            style={{
              backgroundColor: box_2_page?.background_color
                ? `${box_2_page.background_color}33` // 20% прозрачности
                : undefined,
              borderColor: box_2_page?.border_color || undefined,
            }}
          >
            <span className="text-center text-[24px] text-white md:text-left md:text-[48px]">
              {box_2_page?.title}
            </span>
            <Link
              to="/contact-us"
              className="flex h-[40px] w-auto items-center justify-center rounded-4xl border border-white bg-white p-4 text-[12px] text-black duration-300 hover:bg-transparent hover:text-white md:h-[60px] md:w-[265px] md:text-[20px]"
            >
              {box_2_page?.text_url}
            </Link>
          </div>
        </div>

        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="border-r-1 border-l-1 border-[#8F8D81] px-8 py-[72px]">
            <div className="[&_h2]:text-[48px] [&_h3]:text-[32px] [&_p]:mb-4 [&_p]:text-[20px] [&_p]:last:mb-0">
              {text_page_4?.h2 && (
                <h2 className="mb-[24px]">{text_page_4?.h2}</h2>
              )}
              {text_page_4?.h3 && <h3 className="mb-4">{text_page_4?.h3}</h3>}
              {text_page_4?.text && (
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: text_page_4?.text }}
                />
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1202px] px-4">
          <div
            className="flex w-full justify-center border px-8 pt-[48px]"
            style={{
              backgroundColor: image_page_3?.background_color
                ? `${image_page_3.background_color}33`
                : undefined,
              borderColor: image_page_3?.border_color || undefined,
            }}
          >
            <img
              src={`${import.meta.env.VITE_API_URL}${image_page_3?.image?.url}`}
              alt={image_page_3?.image?.alt || ''}
            />
          </div>
        </div>

        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="border-r-1 border-l-1 border-[#8F8D81] px-8 py-[72px]">
            <div className="[&_h2]:text-[48px] [&_h3]:text-[32px] [&_p]:mb-4 [&_p]:text-[20px] [&_p]:last:mb-0">
              {text_page_5?.map(({ id, h2, h3, text }: any) => {
                return (
                  <div key={id} className="mb-[24px]">
                    {h2 && <h2 className="mb-[24px]">{h2}</h2>}
                    {h3 && <h3 className="mb-4">{h3}</h3>}
                    {text && (
                      <div
                        className=""
                        dangerouslySetInnerHTML={{ __html: text }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1202px] px-4">
          <div className="border-r-1 border-l-1 border-[#8F8D81]">
            <div className="border-t border-b border-[#8F8D81] px-[32px] py-[72px] text-center">
              <h2 className="p text-[28px] font-semibold md:text-[48px]">
                {box_item?.title}
              </h2>
            </div>

            {box_item && (
              <div className="grid grid-cols-3">
                {box_item?.blog_item?.map(
                  (
                    {
                      id,
                      title,
                      alt,
                      image,
                      top_text,
                      background_color,
                      border_color,
                    }: any,
                    index: number,
                  ) => {
                    const isLastCol = (index + 1) % 3 === 0;
                    const isLastRow =
                      index >= data.length - (data.length % 3 || 3);
                    return (
                      <div
                        key={id}
                        className={`border-r border-b border-[#8F8D81] ${isLastCol ? 'border-r-0' : ''} ${isLastRow ? 'border-b-0' : ''}`}
                      >
                        <div
                          className="relative flex h-[190px] w-full items-center justify-center border"
                          style={{
                            backgroundColor: background_color
                              ? `${background_color}33`
                              : undefined,
                            borderColor: border_color || undefined,
                          }}
                        >
                          {top_text && <p className="p-[32px]">{top_text}</p>}
                          {image && (
                            <div className="absolute flex h-full w-full items-center justify-center">
                              <img
                                src={`${import.meta.env.VITE_API_URL}${image?.url}`}
                                alt={alt || ''}
                              />
                            </div>
                          )}
                        </div>
                        <div className="px-[32px] py-[48px]">
                          <h3 className="text-[32px] font-semibold">{title}</h3>
                          <p className="mt-[32px] text-[14px] text-[#8F8D81]">
                            {formatDate(data?.createdAt)}
                          </p>
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default Index;
