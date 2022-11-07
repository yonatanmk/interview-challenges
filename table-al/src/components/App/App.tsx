import "./App.scss";
import { useState } from 'react';
import Table from '../Table';
import FilterBar from '../FilterBar';
import { peopleRows, peopleColumns, songRows, songColumns } from './data';
import { PersonFilterContext } from '../../contexts';
import type { IFilter } from '../../interfaces';
import { FILTER_TYPES } from '../../util';

function App() {
  const [personSearch, setPersonSearch] = useState('');
  const peopleFilters: IFilter[] = [
    {
      type: FILTER_TYPES.SEARCH,
      field: 'name',
      value: personSearch,
    },
  ]
  return (
    <div className="App">
      <PersonFilterContext.Provider value={{ search: personSearch, setSearch: setPersonSearch }}>
        <FilterBar />
        <div className="App__container">
          <Table 
            rows={peopleRows} 
            columns={peopleColumns} 
            defaultSortPredicate="name" 
            backupSortPredicate="name"
            filters={peopleFilters}
          />
        </div>
      </PersonFilterContext.Provider>

      <FilterBar />
      <div className="App__container">
        <Table
          rows={songRows}
          columns={songColumns}
          defaultSortPredicate="name"
          backupSortPredicate="name"
        />
      </div>
    </div>
  );
}

export default App;
