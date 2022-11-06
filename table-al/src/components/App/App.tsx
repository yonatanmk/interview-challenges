import "./App.scss";
import Table from '../Table'
import type { IPerson, ITableColumn } from '../../interfaces'
import LinkCell from '../LinkCell'
import AcceptedCell from '../AcceptedCell'

function App() {
  const rows: IPerson[] = [
    {
      "id": 12341643624,
      "name": "Patrick Watts",
      "phone": "1-920-517-1265",
      "email": "laoreet.ipsum@google.couk",
      "address": "Ap #872-1390 Nascetur Ave",
      "postalZip": 558566,
      "country": "Vietnam",
      "link": {
        "props": {
          "text": "Facebook",
          "url": "https://www.facebook.com/",
        }
      },
      "accepted": {
        "props": {
          "accepted": true,
        }
      },
    },
    {
      "id": 123567653824,
      "name": "Jack Barrera",
      "phone": "1-806-473-9143",
      "email": "lectus.rutrum@hotmail.com",
      "address": "P.O. Box 291, 8088 Aenean Road",
      "postalZip": 23704,
      "country": "China",
      "accepted": {
        "props": {
          "accepted": false,
        }
      },
    },
    {
      "id": 122536343564124,
      "name": "Jared Horne",
      "phone": "1-383-432-5382",
      "email": "non@protonmail.ca",
      "address": "5541 Diam Ave",
      "postalZip": 11365,
      "country": "South Korea",
      "link": {
        "props": {
          "text": "Google Maps",
          "url": "https://www.google.com/maps",
        },
      },
    },
    {
      "id": 1234133562424,
      "name": "Xander Harding",
      "phone": "1-336-397-4318",
      "email": "aliquet.diam@aol.edu",
      "address": "398-9679 Sollicitudin St.",
      "postalZip": "8788 YA",
      "country": "Canada",
      "accepted": {
        "props": {
          "accepted": true,
        },
      },
    },
    {
      "id": 12324163224,
      "name": "Cara Neal",
      "phone": "1-713-326-0414",
      "email": "morbi@protonmail.edu",
      "address": "6266 Morbi Avenue",
      "postalZip": 631226,
      "country": "Netherlands",
      "link": {
        "props": {
          "text": "Google",
          "url": "https://www.google.com",
        },
      },
      "accepted": {
        "props": {
          "accepted": false,
        },
      },
    },
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
    {
      name: 'Link',
      index: 7,
      field: 'link',
      // sortFunction
      // filters
      // renderComponent: true,
      component: LinkCell,
    },
    {
      name: 'Accepted',
      index: 8,
      field: 'accepted',
      // sortFunction
      // filters
      // renderComponent: true,
      component: AcceptedCell,
    },
  ]
  
  return (
    <div className="App">
      <Table rows={rows} columns={columns} defaultSortPredicate="name" />
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
