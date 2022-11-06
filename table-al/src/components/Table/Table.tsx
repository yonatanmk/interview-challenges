import classnames from "classnames";
import orderBy from 'lodash/orderBy';
import "./Table.scss";
import Row from '../Row'
import type { IPerson, ITableColumn } from '../../interfaces'

type ITableProps = {
  className?: string;
  rows: IPerson[];
  columns: ITableColumn[];
};

function Table({ className, rows, columns }: ITableProps) {
  const sortedColumns = [...columns].sort((a, b) => a.index > b.index ? 1 : -1)
  const headerRow = columns.reduce((agg: Partial<IPerson>, col) => {
    return {
      ...agg,
      [col.field]: col.name,
    }
  }, {
    id: 'headerRow',
  } as Partial<IPerson>) as IPerson;

  console.log('ROWS')
  console.log(rows)
  console.log('SORTED ROWS')
  console.log(orderBy(rows, ['name'], ['asc']))

  return (
    <table className={classnames("table", className)}>
      <thead>
        <Row key={headerRow.id} className="row__header" row={headerRow} columns={sortedColumns} isHeader/>
      </thead>
      <tbody>
        {rows.map(row => <Row key={row.id} row={row} columns={sortedColumns} />)}
      </tbody>
    </table>
  );
}

export default Table;