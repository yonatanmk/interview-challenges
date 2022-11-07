import "./FilterBar.scss";
import Search from '../Search';

export type IFilterBarProps = {
  // text: string;
  // url: string;
};

function FilterBar({ }: IFilterBarProps) {
  return (
    <div className="FilterBar">
      <p>Filters</p>
      <Search />
    </div>
  )
}

export default FilterBar;
