import classnames from "classnames";
import "./Cell.scss";
import type { ITableCellComponent } from '../../interfaces';
import LinkCell, { ILinkCellProps } from '../LinkCell'

type ICellProps = {
  // cell: ITableColumn;
  field?: string | number | ITableCellComponent;
  // component?: ITableCellComponent;
  renderComponent?: boolean;
  className?: string;
  isHeader?: boolean;
};
function Cell({ field, className: customClass, renderComponent, isHeader = false }: ICellProps) {
  const TableCell = isHeader ? 'th' : 'td';
  const className = classnames("cell", customClass, { "cell__header": isHeader });
  if (renderComponent && !isHeader) {
    // const Component = (field as ITableCellComponent).name
    // return <Component {...} />
    if (!field) return <td className={className} />;
    // debugger;
    return <td className={className}><LinkCell {...(field as ITableCellComponent).props as ILinkCellProps} /></td> // TODO switch td to TableCell
  } else {
    return (
      <TableCell className={className}>
        <p>{field as string | number}</p>
      </TableCell>
    );
  }  
}

export default Cell;
