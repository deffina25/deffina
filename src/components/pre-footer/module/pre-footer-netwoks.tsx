import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios, { type AxiosResponse } from 'axios';

type SocialNetworksPropsItem = {
  id: number;
  alt: string;
  image: {
    url: string;
  };
  url: string;
};

interface SocialNetworksProps {
  className?: string;
}

export const RenderNetworks: React.FC<SocialNetworksProps> = ({
  className,
}) => {
  const [data, setData] = useState<SocialNetworksPropsItem[] | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/social-network', {
        params: {
          populate: {
            item: {
              populate: '*',
            },
          },
        },
      })
      .then((response: AxiosResponse) => {
        setData(response.data.data.item);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных', error);
      });
  }, []);

  return (
    <>
      {data?.map(({ id, image, url, alt }: SocialNetworksPropsItem) => (
        <Link
          key={id}
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-black text-white duration-300 hover:bg-[#4FA8FF]/20 ${className || ''}`}
          target="_blank"
          to={url}
        >
          {image?.url && (
            <img
              src={`${import.meta.env.VITE_API_URL}${image?.url}`}
              alt={alt || ''}
            />
          )}
        </Link>
      ))}
    </>
  );
};
