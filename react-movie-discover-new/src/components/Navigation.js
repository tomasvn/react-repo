import React from 'react';
import NextPage from './NextPage';
import PrevPage from './PrevPage';
import PageCounter from './PageCounter';

const Navigation = ({
  onPrevClick,
  onNextClick,
  prev,
  next,
  pagination,
  allPages,
  renderComponent,
}) => {
  return (
    <div className="navigation u-mt-20 u-mb-20">
      <PrevPage onClick={onPrevClick} name={prev} prevPage={pagination} />
      <PageCounter currentPage={pagination} pageCount={allPages} />
      <NextPage currentPage={pagination} pageCount={allPages} onClick={onNextClick} name={next} />
    </div>
  );
};

export default Navigation;
