import classnames from "classnames";
import "./Row.scss";
import Cell from '../Cell'
import type { ITableCell } from '../../interfaces'

type IRowProps = {
  className?: string;
  cells: ITableCell[];
};

function Row({ cells, className }: IRowProps) {
  
  return (
    <div className={classnames("row", className)}>
      {cells.map(cell => <Cell cell={cell} />)}
    </div>
  );
}

export default Row;
