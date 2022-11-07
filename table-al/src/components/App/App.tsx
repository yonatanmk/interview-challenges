import "./App.scss";
import { useState } from 'react';
import Table from '../Table';
import FilterBar from '../FilterBar';
import Search from '../Search';
import { peopleRows, peopleColumns, songRows, songColumns } from './data';
import type { IFilter } from '../../interfaces';
import { FILTER_TYPES } from '../../util';

function App() {
  const [personSearch, setPersonSearch] = useState('');
  const [songSearch, setSongSearch] = useState('');
  const peopleFilters: IFilter[] = [
    {
      type: FILTER_TYPES.SEARCH,
      field: 'name',
      value: personSearch,
    },
  ];
  const songFilters: IFilter[] = [
    {
      type: FILTER_TYPES.SEARCH,
      field: 'name',
      value: songSearch,
    },
  ];

  return (
    <div className="App">
        <FilterBar>
          <Search search={personSearch} setSearch={setPersonSearch} />
        </FilterBar>
        <div className="App__container">
          <Table 
            rows={peopleRows} 
            columns={peopleColumns} 
            defaultSortPredicate="name" 
            backupSortPredicate="name"
            filters={peopleFilters}
          />
        </div>
        <FilterBar>
          <Search search={songSearch} setSearch={setSongSearch} />
        </FilterBar>
        <div className="App__container">
          <Table
            rows={songRows}
            columns={songColumns}
            defaultSortPredicate="name"
            backupSortPredicate="name"
            filters={songFilters}
          />
        </div>
    </div>
  );
}

export default App;
