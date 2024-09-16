const summaryArr = [
  {
    heading: 'Average Revenue',
    value: '2.3k',
    box: '11.3%',
    svg: '/assets/icons/dollar.svg',

  },
  {
    heading: 'Monthly Users',
    value: '23.6K',
    box: '12.6%',
    svg: '/assets/icons/UsersIcon.svg',  },
  {
    heading: 'Sale Products',
    value: '756',
    box: '3.1%',
    svg: '/assets/icons/BagSimpleIcon.svg',
  },
  {
    heading: 'Saved Products',
    value: '50.8K',
    box: '28.4%',
    svg: '/assets/icons/Heart.svg',
  },
];
const paymentArr = [
  {
    heading: 'Available ',
    heading2: 'Clearing Balance',
    para: 'The funds currently available for withdrawal.',
    price: 'US$99.00',
  },
  {
    heading: 'Available ',
    heading2: 'Withdrawn Amount',
    para: 'The total amount withdrawn.',
    price: 'US$64.30',
  },
  {
    heading: 'Total  ',
    heading2: 'Withdrawn Amount',
    para: 'The cumulative sum of all withdrawals made.',
    price: 'US$2,999.00',
    isFilter:true

  },

];
export { summaryArr, paymentArr };
