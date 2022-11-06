import React, { useState, createContext } from 'react';
import classnames from 'classnames';
import orderBy from 'lodash/orderBy';
import "./Table.scss";
import Row from '../Row'
import type { IPerson, ITableColumn, ITableHeaderRow, ISortOrder } from '../../interfaces'
import HeaderCell from '../HeaderCell';

interface ITableProps {
  className?: string;
  rows: IPerson[];
  columns: ITableColumn[];
  defaultSortPredicate: string;
  backupSortPredicate: string;
};

export const SORT_ORDERS = Object.freeze({
  ASC: 'asc',
  DESC: 'desc',
} as const)

// interface ITableSortContext {
//   sortPredicate: string;
//   sortOrder: ISortOrder;
//   setSortPredicate: React.Dispatch<React.SetStateAction<string>>;
//   setSortOrder: React.Dispatch<React.SetStateAction<ISortOrder>>;
// }

// export const TableSortContext = createContext<ITableSortContext>({
export const TableSortContext = createContext({
  sortPredicate: 'name',
  sortOrder: SORT_ORDERS.ASC as ISortOrder,
  setSortPredicate:( () => {}) as React.Dispatch<React.SetStateAction<string>>,
  setSortOrder: (() => {}) as React.Dispatch<React.SetStateAction<ISortOrder>>,
});

function Table({ className, rows, columns, defaultSortPredicate, backupSortPredicate }: ITableProps) {
  const [sortPredicate, setSortPredicate] = useState(defaultSortPredicate);
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS.ASC as ISortOrder);
  const sortedColumns = [...columns].sort((a, b) => a.index > b.index ? 1 : -1);
  const headerColumns = sortedColumns.map(col => ({
    ...col,
    component: HeaderCell,
  }));
  const sortByColumn = columns.find(col => col.field === sortPredicate) as ITableColumn;
  const sortByFunction = sortByColumn.sortByFunction || sortPredicate; // default to field value if there's no sort by function
  const sortedRows = orderBy(rows, [sortByFunction, defaultSortPredicate || backupSortPredicate], [sortOrder, sortOrder]);
  const headerRow = columns.reduce((agg: Partial<ITableHeaderRow>, col) => {
    return {
      ...agg,
      [col.field]: {
        props: {
          name: col.name,
          field: col.field,
          sortPredicate,
          sortOrder,
        }
      },
    }
  }, {
    id: 'headerRow',
    sortPredicate,
    sortOrder,
  } as Partial<ITableHeaderRow>) as ITableHeaderRow;

  return (
    <table className={classnames("table", className)}>
      <thead>
        <TableSortContext.Provider value={{ sortPredicate, setSortPredicate, sortOrder, setSortOrder }}>
          <Row key={headerRow.id} className="row__header" row={headerRow} columns={headerColumns} isHeader/>
        </TableSortContext.Provider>
      </thead>
      <tbody>
        {sortedRows.map(row => <Row key={row.id} row={row} columns={sortedColumns} />)}
      </tbody>
    </table>
  );
}

export default Table;