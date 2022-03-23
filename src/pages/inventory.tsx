import React, {useMemo} from 'react';
import {Table, Cols} from '../components';
import {Column, SortingRule} from 'react-table';

export function Inventory() {
  const data = useMemo(
    (): Cols[] => [
      {
        col1: 'Hello',
        col2: 'World',
        col3: 'World',
        col4: 'World',
        col5: 'World',
        col6: 'World',
        col7: 'World',
        col8: 'World',
        col9: 'World',
        col10: 'World',
      },
      {
        col1: 'react-table test yang panjang',
        col2: 'rocks',
        col3: 'World',
        col4: 'World',
        col5: 'World',
        col6: 'World',
        col7: 'World',
        col8: 'World',
        col9: 'World',
        col10: 'World',
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'World',
        col4: 'World',
        col5: 'World',
        col6: 'World',
        col7: 'World',
        col8: 'World',
        col9: 'World',
        col10: 'World',
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'World',
        col4: 'World',
        col5: 'World',
        col6: 'World',
        col7: 'World',
        col8: 'World',
        col9: 'World',
        col10: 'World',
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'World',
        col4: 'World',
        col5: 'World',
        col6: 'World',
        col7: 'World',
        col8: 'World',
        col9: 'World',
        col10: 'World',
      },
    ],
    [],
  );

  const columns: Column<Cols>[] = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        disableSortBy: true,
      },
      {
        Header: 'Column 3',
        accessor: 'col3',
      },
      {
        Header: 'Column 4',
        accessor: 'col4',
      },
      {
        Header: 'Column 5',
        accessor: 'col5',
      },
      {
        Header: 'Column 6',
        accessor: 'col6',
      },
      {
        Header: 'Column 7',
        accessor: 'col7',
      },
      {
        Header: 'Column 8',
        accessor: 'col8',
      },
      {
        Header: 'Column 9',
        accessor: 'col9',
      },
      {
        Header: 'Column 10',
        accessor: 'col10',
      },
    ],
    [],
  );

  const onSort = (sort: SortingRule<Cols>[]) => {
    console.log('di sort ', sort);
  };

  const render = () => {
    return (
      <div className="flex flex-col">
        <div className="border-b text-lg mb-4">Inventory</div>
        <Table data={data} columns={columns} onSort={onSort} />
      </div>
    );
  };

  return render();
}
