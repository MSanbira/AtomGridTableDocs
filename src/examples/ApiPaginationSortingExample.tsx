import React, { useCallback, useState } from "react";
import {
  AtomGridTable,
  type TableRow,
  type PaginationChangeOptions,
  type SortingChangeOptions,
} from "@sanbira/atom-grid-table";
import { getRows } from "../helpers/apiSimulator";

const ApiPaginationSortingExample: React.FC = () => {
  const [rows, setRows] = useState<TableRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const colOptions = [
    { name: "id", label: "Employee ID" },
    { name: "name", label: "Name", width: "1.5fr" },
    { name: "department", label: "Department", width: "1.5fr" },
    { name: "performance", label: "Performance" },
  ];

  const handleChange = useCallback(
    async (generalOptions: {
      pageOptions: Pick<PaginationChangeOptions, "apiParams">;
      sortOptions: Pick<SortingChangeOptions, "apiParams">;
    }) => {
      const { pageOptions, sortOptions } = generalOptions;
      const { apiParams: paginationApiParams } = pageOptions;
      const { apiParams: sortingApiParams } = sortOptions;

      setIsLoading(true);
      try {
        const { rows, totalCount } = await getRows(paginationApiParams, sortingApiParams);
        setRows(rows);
        setTotalCount(totalCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return (
    <AtomGridTable
      colOptions={colOptions}
      rows={rows}
      isLoading={isLoading}
      isPagination
      paginationOptions={{
        rowCount: totalCount,
      }}
      sortingOptions={{
        defaultOrdering: "id",
      }}
      onChange={handleChange}
      tableStyleOptions={{
        isZebra: true,
        isStickyHeader: true,
      }}
    />
  );
};

export default ApiPaginationSortingExample;
