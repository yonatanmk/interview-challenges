import classnames from "classnames";
import "./Row.scss";
import Cell from '../Cell'
import type { IPerson, ITableColumn } from '../../interfaces'

type IRowProps = {
  className?: string;
  row: IPerson;
  columns: ITableColumn[];
  isHeader?: boolean;
};

function Row({ row, columns, className, isHeader }: IRowProps) {  
  return (
    <tr className={classnames("row", className)}>
      {columns.map(
        col => <Cell key={row.id.toString() + col.index} text={row[col.field] as string} isHeader={isHeader}/>
      )}
    </tr>
  );
}

export default Row;
