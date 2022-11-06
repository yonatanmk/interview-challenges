import classnames from "classnames";
import "./Row.scss";
import Cell from '../Cell'
import type { ITableColumn } from '../../interfaces'

type IRowProps = {
  className?: string;
  row: any;
  columns: ITableColumn<any>[];
  isHeader?: boolean;
};

function Row({ row, columns, className, isHeader }: IRowProps) {
  return (
    <tr className={classnames("row", className)}>
      {columns.map(
        col => <Cell 
          key={row.id.toString() + col.index} 
          field={row[col.field]}
          column={col}
          component={col.component}
          isHeader={isHeader}
        />
      )}
    </tr>
  );
}

export default Row;
