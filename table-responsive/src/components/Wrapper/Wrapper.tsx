import classnames from 'classnames';
import "./Wrapper.scss";
import { DEVICES } from '../../util';

type WrapperProps = {
  children: React.ReactNode;
  activeOn: string;
};

function Wrapper({ children, activeOn }: WrapperProps) {
  return <div className={classnames({
    wrapper: true,
    'wrapper-tablet': activeOn === DEVICES.TABLET,
    'wrapper-mobile': activeOn === DEVICES.MOBILE,
  })}>{children}</div>;
}

export default Wrapper;
