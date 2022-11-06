import "./AcceptedCell.scss";
import { ImCheckmark, ImCross } from "react-icons/im";
// import { IconContext } from "react-icons";
import classnames from "classnames";

export type IAcceptedCellProps = {
  affirmative: boolean;
};

function AcceptedCell({ affirmative }: IAcceptedCellProps) {
  // return (
  //   <IconContext.Provider value={{ color: accepted ? "#13A850" : "#C6332E", size: '2rem'}}>
  //     <div className="AcceptedCell">
  //       {accepted ? <ImCheckmark /> : <ImCross />}
  //     </div>
  //   </IconContext.Provider>
  // )
  return (
    <div className={classnames("AcceptedCell", { "AcceptedCell__affirmative": affirmative, "AcceptedCell__negative": !affirmative })}>
      {affirmative ? <ImCheckmark /> : <ImCross />}
    </div>
  )
}

export default AcceptedCell;
