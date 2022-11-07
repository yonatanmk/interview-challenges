import "./Search.scss";

export type ISearchProps = {
  label?: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
};

function Search({ label, search, setSearch }: ISearchProps) {
  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }
  return (
    <div className="Search">
      {label && <label htmlFor="people-search">{label}</label>}
      <input id="people-search" type="text" value={search} onChange={handleSearch} />
    </div>
  )
}

export default Search;
