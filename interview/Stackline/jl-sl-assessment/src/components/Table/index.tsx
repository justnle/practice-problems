import { useMemo, useState } from 'react';

import { ProductData } from '@services/dataTypes';

type Column = {
    Header: string;
    accessor: keyof SalesData;
};

type SalesData = ProductData['sales'][0];

type TableProps = {
    data: ProductData[];
};

const formatHeaderString = (header: string) => {
    return header
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .toUpperCase();
};

const Table: React.FC<TableProps> = ({ data }) => {
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: 'asc' | 'desc';
    }>({
        key: 'weekEnding',
        direction: 'asc'
    });

    const columns: Column[] = useMemo(() => {
        if (data.length === 0) {
            return [];
        }

        return Object.keys(data[0].sales[0]).map((key) => ({
            Header: formatHeaderString(key),
            accessor: key as keyof SalesData
        }));
    }, [data]);

    const formatDataForTable = (accessor: string, data: number | string) => {
        switch (accessor) {
            case 'weekEnding':
                if (typeof data !== 'string') {
                    return '';
                } else {
                    const [year, month, day] = data.split('-');

                    return `${month}-${day}-${year}`;
                }
            case 'unitsSold':
                return data;
            default:
                return `$${data.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2
                })}`;
        }
    };

    const handleSort = (accessor: string) => {
        const direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';

        setSortConfig({ key: accessor, direction });
    };

    const sortedData = useMemo(() => {
        if (!sortConfig.key) return data;

        const sorted = [...data].map((row) => ({
            ...row,
            sales: [...row.sales].sort((a, b) => {
                const aValue = a[sortConfig.key as keyof SalesData];
                const bValue = b[sortConfig.key as keyof SalesData];

                if (aValue < bValue) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }

                if (aValue > bValue) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }

                return 0;
            })
        }));

        return sorted;
    }, [data, sortConfig]);

    return (
        <div className="text-[#9D9FA8] h-full">
            <table className="w-full table-auto min-w-max">
                <thead className="p-4 transition-colors cursor-pointer border-b border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.accessor}
                                className="py-4"
                                onClick={() => handleSort(column.accessor)}
                            >
                                <span
                                    className={`flex items-center gap-2 ${
                                        column.accessor === 'weekEnding'
                                            ? 'justify-start'
                                            : 'justify-end'
                                    }`}
                                >
                                    {column.Header}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className={`w-5 h-5 transition-transform ${
                                            sortConfig.key === column.accessor
                                                ? sortConfig.direction === 'asc'
                                                    ? 'rotate-180'
                                                    : 'rotate-0'
                                                : 'rotate-0'
                                        }`}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 15L12 18.75 15.75 15"
                                        ></path>
                                    </svg>
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, index) =>
                        row.sales.map((sale, saleIndex) => (
                            <tr key={`${index}-${saleIndex}`}>
                                {columns.map((column) => (
                                    <td
                                        key={column.accessor}
                                        className={`p-4 border-b border-blue-gray-50 ${
                                            column.accessor === 'weekEnding'
                                                ? 'text-left'
                                                : 'text-right'
                                        }`}
                                    >
                                        {formatDataForTable(
                                            column.accessor,
                                            sale[column.accessor]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
