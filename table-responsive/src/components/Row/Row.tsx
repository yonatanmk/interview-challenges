import "./Row.scss";

type RowProps = { children: React.ReactNode };

function Row({ children }: RowProps) {
  return <div className="row">{children}</div>;
}

export default Row;
