import classnames from "classnames";
import "./Row.scss";
import Cell from '../Cell'
import type { IPerson, ITableColumn } from '../../interfaces'

type IRowProps = {
  className?: string;
  row: IPerson;
  columns: ITableColumn[];
};

function Row({ row, columns, className }: IRowProps) {
  
  return (
    <div className={classnames("row", className)}>
      {columns.map(
        col => <Cell key={row.id.toString() + col.index} text={row[col.field] as string} />
      )}
    </div>
  );
}

export default Row;
