import React, {useEffect} from 'react';
import {
  useTable,
  Column,
  useSortBy,
  SortingRule,
  useRowSelect,
  TableToggleAllRowsSelectedProps,
  CellProps,
} from 'react-table';
import {ChevronUpIcon, ChevronDownIcon} from '@heroicons/react/solid';
import classNames from 'classnames';

export interface Cols {
  [key: string]: string;
}

export interface TableProps {
  data: Cols[];
  columns: Column<Cols>[];
  onSort?: (s: SortingRule<Cols>[]) => void;
}

function Checkbox(props: TableToggleAllRowsSelectedProps) {
  const render = () => {
    const {indeterminate, ...rest} = props;
    return (
      <input
        type="checkbox"
        ref={input => {
          if (input) {
            if (indeterminate != undefined) {
              input.indeterminate = indeterminate;
            }
          }
        }}
        {...rest}
      />
    );
  };

  return render();
}

export function Table(props: TableProps) {
  const tableInstance = useTable(
    {
      columns: props.columns,
      data: props.data,
      manualSortBy: true,
      disableSortRemove: true,
    },
    useSortBy,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          /* eslint-disable react/prop-types */
          Header: ({getToggleAllRowsSelectedProps}) => (
            <div className="w-1">
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({row}: CellProps<Cols>) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    },
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: {sortBy, selectedRowIds},
  } = tableInstance;

  useEffect(() => {
    if (props.onSort) {
      props.onSort(sortBy);
    }
  }, [sortBy]);

  useEffect(() => {
    console.log('selectedRowIds ', selectedRowIds);
  }, [selectedRowIds]);

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
                  const {key, ...restHeaderProps} = column.getHeaderProps(
                    column.getSortByToggleProps(),
                  ); //
                  return (
                    <th className="border" key={key} {...restHeaderProps}>
                      <div className="min-w-max flex flex-row justify-between items-center text-sm p-2 bg-gray-100">
                        {column.render('Header')}
                        <div className="ml-3">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <ChevronUpIcon className="w-4 text-gray-500" />
                            ) : (
                              <ChevronDownIcon className="w-4 text-gray-500" />
                            )
                          ) : (
                            ''
                          )}
                        </div>
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
              <tr key={key} {...restRowProps} className={classNames({"bg-blue-50" :row.isSelected})}>
                {row.cells.map(cell => {
                  const {key, ...restCellProps} = cell.getCellProps();
                  return (
                    <td className="border" key={key} {...restCellProps}>
                      <div className={classNames({"bg-blue-50" :row.isSelected}, "min-w-max p-2 bg-white text-sm text-gray-500")}>
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
