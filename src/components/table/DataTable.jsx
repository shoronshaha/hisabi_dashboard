import { useTable, usePagination } from "react-table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const DataTable = ({ columns, data, th, tr, td, noPagination }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );

  const renderPageNumbers = () => {
    const totalPages = pageOptions.length;
    const visiblePages = new Set();

    visiblePages.add(0);
    visiblePages.add(totalPages - 1);

    if (pageIndex > 1) visiblePages.add(pageIndex - 1);
    visiblePages.add(pageIndex);
    if (pageIndex < totalPages - 2) visiblePages.add(pageIndex + 1);

    const pages = [];
    let prev = -1;
    pageOptions.forEach((num) => {
      if (visiblePages.has(num)) {
        if (prev !== num - 1) pages.push("...");
        pages.push(
          <button
            key={num}
            onClick={() => gotoPage(num)}
            className={`px-4 py-2 rounded-full  ${
              pageIndex === num ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
          >
            {num + 1}
          </button>
        );
        prev = num;
      }
    });
    return pages;
  };

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="w-full min-w-[540px]">
        <TableHeader headerGroups={headerGroups} th={th} />
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow key={row.id || row.index} row={row} tr={tr} td={td} />
            );
          })}
        </tbody>
      </table>
      {noPagination ? (
        ""
      ) : (
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={previousPage}
            disabled={!canPreviousPage}
            className="px-4 py-2 bg-gray-200 rounded-full"
          >
            Previous
          </button>
          {renderPageNumbers()}
          <button
            onClick={nextPage}
            disabled={!canNextPage}
            className="px-4 py-2 bg-gray-200 rounded-full"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
