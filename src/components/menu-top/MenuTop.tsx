import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ListTopMenu } from './list/list.tsx';
import Down from './../../assets/icons/down.svg?react';

type ListTopMenu = {
  id: number;
  title: string;
  href: string;
  children?: ListTopMenu[];
};

export const MenuTop = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={menuRef}
      className="relative flex h-[216px] flex-col gap-6 overflow-scroll text-[24px] text-white md:text-[40px] xl:h-full xl:flex-row xl:gap-12 xl:overflow-visible xl:text-xl [&_a]:text-white"
    >
      {ListTopMenu()?.map(({ id, title, href, children }) => {
        if (children) {
          const isOpen = openId === id;
          return (
            <div key={id} className="relative">
              <button
                onClick={() => toggleMenu(id)}
                className="flex cursor-pointer items-center gap-2 focus:outline-none md:w-full md:justify-between"
              >
                <span>{title}</span>
                <Down
                  className={`w-[8px] transition-transform duration-300 md:w-[16px] xl:w-[8px] ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <ul
                className={`mt-4 flex min-w-[155px] flex-col gap-4 border-[#8F8D81] bg-transparent px-8 py-4 text-base transition-all duration-300 ease-in-out md:px-10 md:text-[32px] xl:absolute xl:border xl:bg-black xl:px-2 xl:text-base ${
                  isOpen
                    ? 'flex translate-y-0 opacity-100 xl:visible'
                    : 'hidden translate-y-2 opacity-0 xl:invisible'
                }`}
              >
                {children.map(({ id, title, href }) => (
                  <li key={id}>
                    <Link
                      to={href}
                      className="duration-300 hover:underline"
                      onClick={() => setOpenId(null)}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return (
          <Link key={id} to={href}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
};
