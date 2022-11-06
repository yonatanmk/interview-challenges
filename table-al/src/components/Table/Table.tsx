import classnames from "classnames";
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
  // const headerCells = sortedColumns.map(col => ({
  //   id: col.index,
  //   text: col.name,
  // }))
  const headerRow = columns.reduce((agg: Partial<IPerson>, col) => {
    return {
      ...agg,
      [col.field]: col.name,
    }
  }, {
    id: 'headerRow',
  } as Partial<IPerson>) as IPerson;

  console.log(headerRow)

  return (
    <table className={classnames("table", className)}>
      <Row key={headerRow.id} className="row__header" row={headerRow} columns={sortedColumns} isHeader/>
      {rows.map(row => <Row key={row.id} row={row} columns={sortedColumns} />)}
    </table>
  );
}

export default Table;