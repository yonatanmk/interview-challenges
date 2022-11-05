import "./Wrapper.scss";

type WrapperProps = { children: React.ReactNode };

function Wrapper({ children }: WrapperProps) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
