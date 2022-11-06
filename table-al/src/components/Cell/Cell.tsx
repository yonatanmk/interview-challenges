import classnames from "classnames";
import "./Cell.scss";
import type { ITableCell } from '../../interfaces'

type ICellProps = {
  cell: ITableCell;
  grow?: boolean;
  className?: string;
};
function Cell({ cell, className, grow = false }: ICellProps) {
  return (
    <div className={classnames("cell", className, { grow })}>
      <p>{cell.text}</p>
    </div>
  );
}

export default Cell;
