import classnames from "classnames";
import "./Cell.scss";
import type { ITableCellComponent } from '../../interfaces';

type ICellProps = {
  field?: string | number | ITableCellComponent;
  renderComponent?: boolean;
  className?: string;
  isHeader?: boolean;
  component?: React.ComponentType<any>;
};
function Cell({ field, className: customClass, component, isHeader = false }: ICellProps) {
  const TableCell = isHeader ? 'th' : 'td';
  const className = classnames("cell", customClass, { "cell__header": isHeader });
  let innerComponent;
  if (component && !isHeader) {
    if (field) {
      const Component = component;
      innerComponent = <Component {...(field as ITableCellComponent).props as {[key: string]: any}}></Component>;
    } else {
      innerComponent = null;
    }
  } else {
    innerComponent = <p>{field as string | number}</p>;
  }
  return (
    <TableCell className={className}>
      {innerComponent}
    </TableCell>
  );
}

export default Cell;
