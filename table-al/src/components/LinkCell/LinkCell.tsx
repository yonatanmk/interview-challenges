import classnames from "classnames";
import "./LinkCell.scss";
import type { ITableCellComponent } from '../../interfaces';

export type ILinkCellProps = {
  text: string;
  url: string;
};
function LinkCell({ text, url }: ILinkCellProps) {
  console.log('LINKCELL')
  console.log({ text, url })
  return <a href={url}>{text}</a>  
}

export default LinkCell;
