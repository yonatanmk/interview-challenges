import "./App.scss";
import Table from '../Table'
import { peopleRows, peopleColumns, songRows, songColumns } from './data'

function App() {
  return (
    <div className="App">
      <Table 
        rows={peopleRows} 
        columns={peopleColumns} 
        defaultSortPredicate="name" 
        backupSortPredicate="name"
      />
      <Table 
        rows={songRows} 
        columns={songColumns} 
        defaultSortPredicate="name" 
        backupSortPredicate="name"
      />
    </div>
  );
}

export default App;
