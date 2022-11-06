import "./HeaderCell.scss";
import { useContext } from 'react';
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { TableSortContext, SORT_ORDERS } from '../Table';

export type IHeaderCellProps = {
  name: string;
  field: string;
};

function HeaderCell({ name, field }: IHeaderCellProps) {
  const { sortPredicate, setSortPredicate, sortOrder, setSortOrder } = useContext(TableSortContext);

  const isSorted = field === sortPredicate;
  const ArrowIcon = sortOrder === SORT_ORDERS.ASC ? BsArrowDown : BsArrowUp;


  const toggleSortOrder = () => {
    setSortOrder(sortOrder === SORT_ORDERS.ASC ? SORT_ORDERS.DESC : SORT_ORDERS.ASC)
  }

  const onHeaderClick = () => {
    if (isSorted) {
      toggleSortOrder()
    } else {
      setSortPredicate(field)
      setSortOrder(SORT_ORDERS.ASC)
    }
  }

  return (
    <div className="HeaderCell">
      <button onClick={onHeaderClick}>
        <p>{name}</p>
        {isSorted && <ArrowIcon />}
      </button>
    </div>
  )
}

export default HeaderCell;