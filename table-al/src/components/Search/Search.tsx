import "./Search.scss";
import React, { useContext } from 'react';
import { PersonFilterContext } from '../../contexts';

export type ISearchProps = {
  // text: string;
  // url: string;
};

function Search({ }: ISearchProps) {
  const { search, setSearch } = useContext(PersonFilterContext);
  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    console.log('HANDLE SAERCH')
    console.log(e)
    setSearch(e.currentTarget.value);
  }
  return (
    <div className="Search">
      <label htmlFor="people-search">Search People: </label>
      <input id="people-search" type="text" value={search} onChange={handleSearch} />
    </div>
  )
}

export default Search;
