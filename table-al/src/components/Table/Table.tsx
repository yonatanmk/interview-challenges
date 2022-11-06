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
  const headerCells = columns.map(col => ({
    text: col.name,
  }))
  return (
    <div className={classnames("table", className)}>
      <Row className="row__header" cells={headerCells} />
      <Row cells={headerCells} />
    </div>
  );
}

export default Table;