import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pages = [];
  const range = 2; // Number of pages to show before and after the current page
  const start = Math.max(1, currentPage - range);
  const end = Math.min(totalPages, currentPage + range);

  // First page with left arrow
  if (currentPage > 0) {
    pages.push(
      <button
        key="prev"
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-2 py-1 bg-indigo-300 rounded-full w-[20px] h-[20px] flex items-center justify-center text-gray-600"
      >
        <FaChevronLeft />
      </button>
    );
  }

  if (start > 1) {
    pages.push(
      <button
        key={1}
        onClick={() => setCurrentPage(1)}
        className="px-2 py-1 bg-indigo-300 rounded-full w-[20px] h-[20px] flex items-center justify-center text-gray-600"
      >
        1
      </button>
    );
    if (start > 2)
      pages.push(
        <span key="dots-start" className="px-2 py-1 text-gray-600">
          ...
        </span>
      );
  }

  // Pages around the current page
  for (let i = start; i <= end; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`px-2 py-1 bg-indigo-300 rounded-full w-[20px] h-[20px] flex items-center justify-center ${
          currentPage === i ? "font-bold text-indigo-600" : "text-gray-600"
        }`}
      >
        {i}
      </button>
    );
  }

  if (end < totalPages) {
    if (end < totalPages - 1)
      pages.push(
        <span key="dots-end" className="px-2 py-1 text-gray-600">
          ...
        </span>
      );
    pages.push(
      <button
        key={totalPages}
        onClick={() => setCurrentPage(totalPages)}
        className="px-2 py-1 bg-indigo-300 rounded-full w-[20px] h-[20px] flex items-center justify-center text-gray-600"
      >
        {totalPages}
      </button>
    );
  }

  // Right arrow for next page
  if (currentPage < totalPages) {
    pages.push(
      <button
        key="next"
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-2 py-1 bg-indigo-300 rounded-full w-[20px] h-[20px] flex items-center justify-center text-gray-600"
      >
        <FaChevronRight />
      </button>
    );
  }

  return pages;
};
