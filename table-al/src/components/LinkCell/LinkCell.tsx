import "./LinkCell.scss";

export type ILinkCellProps = {
  text: string;
  url: string;
};

function LinkCell({ text, url }: ILinkCellProps) {
  return <a href={url}>{text}</a>  
}

export default LinkCell;
