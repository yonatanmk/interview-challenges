import classnames from "classnames";
import "./Table.scss";

type TableProps = {
  children?: React.ReactNode;
  className?: string;
};

function Table({ children, className }: TableProps) {
  return (
    <div className={classnames("table", className)}>
      {children}
    </div>
  );
}

export default Table;