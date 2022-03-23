import React from 'react';
import {useTable, Column} from 'react-table';

export interface Cols {
  [key: string]: string;
}

export interface TableProps {
  data: Cols[];
  columns: Column<Cols>[];
}
export function Table(props: TableProps) {
  const tableInstance = useTable({columns: props.columns, data: props.data});
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    tableInstance;

  return (
    <div className="w-full overflow-auto">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => {
            const {key, ...restHeaderGroupProps} =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...restHeaderGroupProps}>
                {headerGroup.headers.map(column => {
                  const {key, ...restHeaderProps} = column.getHeaderProps();
                  return (
                    <th className="border" key={key} {...restHeaderProps}>
                      <div className="min-w-max flex flex-row text-sm p-2 bg-gray-100">
                        {column.render('Header')}
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            const {key, ...restRowProps} = row.getRowProps();
            return (
              <tr key={key} {...restRowProps}>
                {row.cells.map(cell => {
                  const {key, ...restCellProps} = cell.getCellProps();
                  return (
                    <td className="border" key={key} {...restCellProps}>
                      <div className="min-w-max p-2 bg-white text-sm text-gray-500">
                        {cell.render('Cell')}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
