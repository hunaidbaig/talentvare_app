import React from 'react';

const SearchIcon = ({ color = '#737A91', size = 18, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.4999 17.024L13.9065 14.4306"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M13.0976 7.57274C13.0928 8.99051 12.5901 10.3615 11.6773 11.4464C10.7645 12.5313 9.49967 13.261 8.10361 13.5083C6.70756 13.7555 5.26902 13.5045 4.03919 12.7991C2.80936 12.0936 1.86641 10.9786 1.37498 9.64874C0.883559 8.31886 0.874896 6.85859 1.35051 5.52297C1.82611 4.18735 2.75577 3.06123 3.97714 2.34126C5.19851 1.62129 6.63397 1.35324 8.03286 1.58389C9.43175 1.81454 10.7052 2.52924 11.6308 3.6032"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

export default SearchIcon;
