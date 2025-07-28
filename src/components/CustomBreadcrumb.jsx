import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CustomBreadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm hidden md:block breadcrumbs py-2 px-4 rounded-md" aria-label="breadcrumb">
      <ol className="list-reset flex space-x-2">
        <li className="text-muted-foreground text-[14px] leading-[20px] font-[400]">
          Dashboards
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-foreground capitalize font-[400] text-[14px] leading-[20px] ml-2">{value}</span>
              ) : (
                <Link to={to} className="text-foreground font-[400] text-[14px] leading-[20px] hover:underline capitalize ml-2">
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default CustomBreadcrumb;
