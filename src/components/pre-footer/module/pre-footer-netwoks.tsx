import * as React from 'react';
import { type JSX } from 'react';
import { Link } from 'react-router-dom';

type SocialNetworksPropsItem = {
  id: number;
  alt: string;
  icon: JSX.Element;
  href: string;
};

interface SocialNetworksProps {
  data: SocialNetworksPropsItem[];
  className?: string;
}

export const RenderNetworks: React.FC<SocialNetworksProps> = ({
  data,
  className,
}) => {
  return (
    <>
      {data.map(({ id, icon, href }) => (
        <Link
          key={id}
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-black text-white duration-300 hover:bg-[#4FA8FF]/20 ${className || ''}`}
          target="_blank"
          to={href}
        >
          {icon}
        </Link>
      ))}
    </>
  );
};
