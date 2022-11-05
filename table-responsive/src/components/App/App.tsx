import "./App.scss";
import Table from '../Table'
import Row from '../Row'
import Cell from '../Cell'
import Wrapper from '../Wrapper'

function App() {
  return (
    <div className="App">
      <Table>
        <Row>
          <Cell className="light-blue" grow>a</Cell>
          <Cell className="blue">b</Cell>
          <Cell className="light-pink"grow>c</Cell>
          <Cell className="light-pink">d</Cell>
        </Row>
      </Table>
      <Table>
      <Row>
      <Cell className="light-blue" grow>a</Cell>
          <Cell className="blue">b</Cell>
        {/* <Wrapper activeOn={DEVICES.tablet}> */}
        <Wrapper>
        <Cell className="light-pink"grow>c</Cell>
          <Cell className="light-pink">d</Cell>
        </Wrapper>
      </Row>
    </Table>
    </div>
  );
}

export default App;
