import "./App.scss";
import Table from '../Table'
import { peopleRows, peopleColumns } from './data'

function App() {
  return (
    <div className="App">
      <Table 
        rows={peopleRows} 
        columns={peopleColumns} 
        defaultSortPredicate="name" 
        backupSortPredicate="name"
      />
    </div>
  );
}

export default App;
