import React, { FC } from 'react';

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePaginationClick: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ page, totalPages, handlePaginationClick }) => {
  const handlePageClick = (clickedPage: number) => {
    if (clickedPage >= 1 && clickedPage <= totalPages) {
      handlePaginationClick(clickedPage);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className={`px-4 py-2 r text-sm font-medium text-[#3fbad6] hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
          page === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => handlePageClick(page - 1)}
      >
        {"<<"}
      </button>
      <button
        className={`px-4 py-2 r text-sm font-medium text-[#3fbad6] hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
          page === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => handlePageClick(page - 1)}
      >
        {"<"}
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-4 py-2  text-sm font-medium text-[#3fbad6] hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
            pageNumber === page ? 'bg-purple-700 text-white' : ''
          }`}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

<button
        className={`px-4 py-2 r text-sm font-medium text-[#3fbad6] hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
          page === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => handlePageClick(page - 1)}
      >
        {"...."}
      </button>
      <button
        className={`px-4 py-2 r text-sm font-medium text-[#3fbad6] hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
          page === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => handlePageClick(page - 1)}
      >
        {"208"}
      </button>
      <button
        className={`px-4 py-2   text-sm font-medium text-[#3fbad6] hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
          page === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => handlePageClick(page + 1)}
      >
        {">"}
      </button>
      <button
        className={`px-4 py-2   text-sm font-medium text-[#3fbad6] hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
          page === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => handlePageClick(page + 1)}
      >
        {">>"}
      </button>

    </div>
  );
};

export default Pagination;
