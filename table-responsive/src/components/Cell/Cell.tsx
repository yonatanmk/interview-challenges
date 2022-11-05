import classnames from "classnames";
import "./Cell.scss";

type CellProps = {
  children?: React.ReactNode;
  grow?: boolean;
  className?: string;
};
function Cell({ children, className, grow = false }: CellProps) {
  return (
    <div className={classnames("cell", className, { grow })}>{children}</div>
  );
}

export default Cell;
