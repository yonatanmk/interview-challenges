import classnames from "classnames";
import "./Cell.scss";
import type { ITableColumn } from '../../interfaces'

type ICellProps = {
  // cell: ITableColumn;
  text: string;
  grow?: boolean;
  className?: string;
};
function Cell({ text, className, grow = false }: ICellProps) {
  return (
    <div className={classnames("cell", className, { grow })}>
      {/* <p>{cell.text}</p> */}
      <p>{text}</p>
    </div>
  );
}

export default Cell;
