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
      className="relative hidden gap-12 text-xl text-white xl:flex [&_a]:text-white"
    >
      {ListTopMenu()?.map(({ id, title, href, children }) => {
        if (children) {
          const isOpen = openId === id;
          return (
            <div key={id} className="relative">
              <button
                onClick={() => toggleMenu(id)}
                className="flex cursor-pointer items-center gap-2 focus:outline-none"
              >
                <span>{title}</span>
                <Down
                  className={`transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <ul
                className={`absolute mt-4 flex min-w-[155px] flex-col gap-4 border border-[#8F8D81] bg-black px-2 py-4 text-base transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0'
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
