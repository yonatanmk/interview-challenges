import "./App.scss";
import Table from '../Table'
import Row from '../Row'
import Cell from '../Cell'
import Wrapper from '../Wrapper'
import { DEVICES } from '../../util';

function App() {
  return (
    <div className="App">
      <Table>
        <Row>
          <Cell className="light-blue" grow>a</Cell>
          <Cell className="blue">b</Cell>
          <Cell className="light-pink"grow>c</Cell>
          <Cell className="pink">d</Cell>
        </Row>
      </Table>
      <Table>
        <Row>
          <Cell className="light-blue" grow>a</Cell>
          <Cell className="blue">b</Cell>
          <Wrapper activeOn={DEVICES.TABLET}>
            <Cell className="light-pink" grow>c</Cell>
            <Cell className="pink">d</Cell>
          </Wrapper>
        </Row>
      </Table>
      <Table>
        <Row>
          <Wrapper activeOn={DEVICES.TABLET}>
            <Cell className="light-blue" grow>a</Cell>
            <Cell className="blue">b</Cell>
          </Wrapper>
          <Wrapper activeOn={DEVICES.TABLET}>
            <Cell className="light-pink" grow>c</Cell>
            <Cell className="pink">d</Cell>
          </Wrapper>
        </Row>
      </Table>
      <Table>
      <Row>
        <Wrapper activeOn={DEVICES.MOBILE}>
          <Wrapper activeOn={DEVICES.TABLET}>
            <Cell className="light-blue" grow>a</Cell>
            <Cell className="blue">b</Cell>
          </Wrapper>
          <Wrapper activeOn={DEVICES.TABLET}>
            <Cell className="light-pink" grow>c</Cell>
            <Cell className="pink">d</Cell>
          </Wrapper>
        </Wrapper>
      </Row>
    </Table>
    </div>
  );
}

export default App;
