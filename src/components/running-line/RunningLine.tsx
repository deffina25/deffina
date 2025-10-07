import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';
import axios, { type AxiosResponse } from 'axios';

type Image = {
  id: number;
  url: string;
  name: string;
};

export const RunningLine = () => {
  const [listRunningLine, setListRunningLine] = useState<Image[] | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/running-line', {
        params: {
          populate: {
            running_line: {
              populate: '*',
            },
          },
        },
      })
      .then((response: AxiosResponse) => {
        setListRunningLine(response.data.data.running_line.images);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных', error);
      });
  }, []);

  const options = {
    speed: 50,
    gradient: false,
    pauseOnHover: true,
  };

  return (
    listRunningLine && (
      <div className="flex h-[160px] items-center justify-center border-y-1 border-[#8F8D81]">
        <Marquee {...options}>
          {listRunningLine?.map(({ id, url, name }: Image) => (
            <div key={id} className="mx-[45px]">
              <img
                src={`${import.meta.env.VITE_API_URL}${url}`}
                alt={name || ''}
                className="max-h-[60px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    )
  );
};
