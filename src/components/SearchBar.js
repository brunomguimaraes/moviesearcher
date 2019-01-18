import React from "react";

function SearchBar(props) {
  return (
    <div>
      <input
        className="searchBar"
        onChange={props.onSearch}
        placeholder="Busque um filme por nome, ano ou gênero..."
      />
    </div>
  );
}

export default SearchBar;
