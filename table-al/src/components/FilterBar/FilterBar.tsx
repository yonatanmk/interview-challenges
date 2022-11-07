import "./FilterBar.scss";

export type IFilterBarProps = {
  children: React.ReactNode;
};

function FilterBar({ children }: IFilterBarProps) {
  return (
    <div className="FilterBar">
      <p>Filters</p>
      {children}
    </div>
  )
}

export default FilterBar;
