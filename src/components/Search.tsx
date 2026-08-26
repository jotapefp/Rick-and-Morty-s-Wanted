type SearchProps = {
  loadCharacter: (characterName: string) => Promise<void>;
};

import { useState, type KeyboardEvent } from "react";

import classes from "./Search.module.css";

// Icons
import { FaSearch } from "react-icons/fa";

const Search = ({ loadCharacter }: SearchProps) => {
  const [characterName, setCharacterName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadCharacter(characterName);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Search a Character:</h2>

      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Name of the character"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={() => loadCharacter(characterName)}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
