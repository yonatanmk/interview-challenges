import classnames from "classnames";
import "./Cell.scss";
// import type { ITableColumn } from '../../interfaces'

type ICellProps = {
  // cell: ITableColumn;
  text: string;
  className?: string;
  isHeader?: boolean;
};
function Cell({ text, className, isHeader = false }: ICellProps) {
  const props = {className: classnames("cell", className, { "cell__header": isHeader }) }
  if (isHeader) {
    return <th {...props}><p>{text}</p></th>;
  }
  return <td {...props}><p>{text}</p></td>;
}

export default Cell;
