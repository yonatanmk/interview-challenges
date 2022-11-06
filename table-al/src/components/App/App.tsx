import "./App.scss";
import Table from '../Table'
// import Row from '../Row'
// import Cell from '../Cell'
import type { IPerson, ITableColumn } from '../../interfaces'

function App() {
  const rows: IPerson[] = [
    {
      "id": 12341643624,
      "name": "Patrick Watts",
      "phone": "1-920-517-1265",
      "email": "laoreet.ipsum@google.couk",
      "address": "Ap #872-1390 Nascetur Ave",
      "postalZip": 558566,
      "country": "Vietnam"
    },
    {
      "id": 123567653824,
      "name": "Jack Barrera",
      "phone": "1-806-473-9143",
      "email": "lectus.rutrum@hotmail.com",
      "address": "P.O. Box 291, 8088 Aenean Road",
      "postalZip": 23704,
      "country": "China"
    },
    {
      "id": 122536343564124,
      "name": "Jared Horne",
      "phone": "1-383-432-5382",
      "email": "non@protonmail.ca",
      "address": "5541 Diam Ave",
      "postalZip": 11365,
      "country": "South Korea"
    },
    {
      "id": 1234133562424,
      "name": "Xander Harding",
      "phone": "1-336-397-4318",
      "email": "aliquet.diam@aol.edu",
      "address": "398-9679 Sollicitudin St.",
      "postalZip": "8788 YA",
      "country": "Canada"
    },
    {
      "id": 12324163224,
      "name": "Cara Neal",
      "phone": "1-713-326-0414",
      "email": "morbi@protonmail.edu",
      "address": "6266 Morbi Avenue",
      "postalZip": 631226,
      "country": "Netherlands"
    }
  ];

  const columns: ITableColumn[] = [
    {
      name: 'Country',
      index: 6,
      field: 'country',
    },
    {
      name: 'Email',
      index: 3,
      field: 'email',
    },
    {
      name: 'Address',
      index: 4,
      field: 'address',
    },
    {
      name: 'Phone',
      index: 2,
      field: 'phone',
    },
    {
      name: 'Zip Code',
      index: 5,
      field: 'postalZip',
    },
    {
      name: 'Name',
      index: 1,
      field: 'name',
      // sortFunction
      // filters
      // renderComponent
    },
  ]
  
  return (
    <div className="App">
      <Table rows={rows} columns={columns} />
      {/* <Table rows={rows}>
        <Row>
          <Cell className="light-blue" grow>a</Cell>
          <Cell className="blue">b</Cell>
          <Cell className="light-pink"grow>c</Cell>
          <Cell className="pink">d</Cell>
        </Row>
      </Table> */}
    </div>
  );
}

export default App;
