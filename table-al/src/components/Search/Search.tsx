import "./Search.scss";

export type ISearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
};

function Search({ search, setSearch }: ISearchProps) {
  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
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
