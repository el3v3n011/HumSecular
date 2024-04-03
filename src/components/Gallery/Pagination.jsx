import classnames from 'classnames';
import { usePagination, DOTS } from "./usePagination.js"

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('flex justify-center mt-12 list-none', className)}
    >
       {/* Left navigation arrow */}
      <li
        className={classnames('px-3 h-8 text-center mx-1 text-black border border-transparent flex items-center justify-center rounded-full leading-none text-sm min-w-8', {
          'pointer-events-none': currentPage === 1,
          'hover:bg-gray-200 cursor-pointer': currentPage !== 1,
          'bg-transparent cursor-default': currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left">
        <span className="inline-block w-2 h-2 border-t border-r border-black transform -rotate-[135deg] -translate-x-1/2"></span>
        </div>
      </li>
    {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
            return <li key={index} className="px-3 h-8 text-center mx-1 text-black border border-transparent flex items-center justify-center rounded-full leading-none text-sm min-w-8 dots">&#8230;</li>;
        }

        // Render our Page Pills
        return (
            <li
                key={index}
                className={classnames('px-3 h-8 text-center mx-1 text-black border border-transparent flex items-center justify-center rounded-full leading-none text-sm min-w-8', {
                    'bg-gray-300': pageNumber === currentPage,
                    'hover:bg-gray-200 cursor-pointer': pageNumber !== currentPage,
                    'bg-transparent cursor-default': pageNumber === currentPage
                })}
                onClick={() => onPageChange(pageNumber)}
            >
                {pageNumber}
            </li>
        );
    })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('px-3 h-8 text-center mx-1 text-black border border-transparent flex items-center justify-center rounded-full leading-none text-sm min-w-8', {
          'pointer-events-none': currentPage === lastPage,
          'hover:bg-gray-200 cursor-pointer': currentPage !== lastPage,
          'bg-transparent cursor-default': currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right">
          <span className="inline-block w-2 h-2 border-t border-r border-black transform rotate-45"></span>
        </div>
      </li>
    </ul>
  );
};

export default Pagination;
