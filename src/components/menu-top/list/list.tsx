import { useTranslation } from 'react-i18next';

export const ListTopMenu = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: t('menuTop.m1'),
      href: '/services',
    },
    {
      id: 2,
      title: t('menuTop.m2'),
      children: [
        {
          id: '1-1',
          title: 'FinTech',
          href: 'fin-tech',
        },
        {
          id: '1-2',
          title: 'BlockChain',
          href: 'block-chain',
        },
        {
          id: '1-3',
          title: 'Education Tech',
          href: 'education-tech',
        },
        {
          id: '1-4',
          title: 'Insurance',
          href: 'insurance',
        },
        {
          id: '1-5',
          title: 'Real Estate',
          href: 'real-estate',
        },
        {
          id: '1-6',
          title: 'Logistic',
          href: 'logistic',
        },
      ],
    },
    {
      id: 3,
      title: t('menuTop.m3'),
      children: [
        { id: '3-1', title: 'How we work', href: 'how-work' },
        { id: '3-2', title: 'Our partnerships', href: 'our-partnerships' },
        { id: '3-3', title: 'Locations', href: 'locations' },
        { id: '3-4', title: 'Careers', href: 'careers' },
        { id: '3-5', title: 'Why deffina', href: 'why-deffina' },
      ],
    },
    {
      id: 4,
      title: t('menuTop.m4'),
      href: '/blog',
    },
  ];
};
