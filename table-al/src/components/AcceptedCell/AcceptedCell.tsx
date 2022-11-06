import "./AcceptedCell.scss";
import { ImCheckmark, ImCross } from "react-icons/im";
// import { IconContext } from "react-icons";
import classnames from "classnames";

export type IAcceptedCellProps = {
  accepted: boolean;
};

function AcceptedCell({ accepted }: IAcceptedCellProps) {
  // return (
  //   <IconContext.Provider value={{ color: accepted ? "#13A850" : "#C6332E", size: '2rem'}}>
  //     <div className="AcceptedCell">
  //       {accepted ? <ImCheckmark /> : <ImCross />}
  //     </div>
  //   </IconContext.Provider>
  // )
  return (
    <div className={classnames("AcceptedCell", { "AcceptedCell__accepted": accepted, "AcceptedCell__rejected": !accepted })}>
      {accepted ? <ImCheckmark /> : <ImCross />}
    </div>
  )
}

export default AcceptedCell;
