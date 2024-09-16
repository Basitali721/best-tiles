import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'ACCOUNTS',
    path: '/category-details',
    icon: icon('ic_analytics'),
  },
  {
    title: 'GUIDES',
    path: '/category-details',
    icon: icon('ic_user'),
  },
  {
    title: 'CONSOLE/PC SERVICES',
    path: '/category-details',
    icon: icon('ic_cart'),
  },
  {
    title: 'GRAPHICS DESIGNS',
    path: '/category-details',
    icon: icon('ic_blog'),
  },
  {
    title: 'PROXIES',
    path: '/category-details',
    icon: icon('ic_lock'),
  },
  {
    title: 'VPNS',
    path: '/category-details',
    icon: icon('ic_disabled'),
  },
  {
    title: 'WEB DEVELOPERS',
    path: '/category-details',
    icon: icon('ic_disabled'),
  },
  {
    title: 'All',
    path: '/category-details',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
