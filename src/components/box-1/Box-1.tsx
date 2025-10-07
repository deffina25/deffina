import { Link } from 'react-router-dom';
import RightIcon from './../../assets/icons/right-icon.svg?react';
import type { Items } from '../../pages/case-studies';
import React from 'react';

interface Props {
  data: Items[];
}

export const Box1: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative border-1 border-t-0 border-b-0 border-[#8F8D81]">
      <div className="grid grid-cols-1 text-[32px] font-semibold md:grid-cols-2">
        {data?.map(({ case_item, documentId }, index: number) => {
          const { id, text, alt, image } = case_item || {};
          const removeRightBorder = (index + 1) % 2 === 0;

          return (
            <div
              key={id}
              className={`border-1 border-[#8F8D81] border-t-transparent border-l-transparent px-2 py-[48px] transition-colors duration-300 hover:bg-[#F92672]/20 md:px-8 md:py-[72px] ${
                removeRightBorder ? 'border-r-0' : ''
              }`}
            >
              {image && (
                <div>
                  <img
                    src={`${import.meta.env.VITE_API_URL}${image?.url}`}
                    alt={alt || ''}
                  />
                </div>
              )}

              {text && (
                <div
                  className="mt-[23px] text-[20px] font-semibold md:mt-[48px] md:text-[24px] xl:text-[32px]"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}

              <Link
                to={String(id) || ''}
                state={{ documentId }}
                className="mt-4 flex items-center justify-start text-[12px] text-[#4FA8FF] duration-1000 hover:underline md:text-base xl:text-[20px]"
              >
                <span>Read story</span> <RightIcon className="ml-[4px]" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
