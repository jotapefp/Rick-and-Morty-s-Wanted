type SearchProps = {
  loadCharacter: (characterName: string) => Promise<void>;
};

import { useState } from "react";

// CSS
import classes from "./Search.module.css";

// Icons
import { FaSearch } from "react-icons/fa";

const Search = ({ loadCharacter }: SearchProps) => {
  const [characterName, setCharacterName] = useState("");

  return (
    <div className={classes.search}>
      <h2>Search a Character:</h2>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Name of the character"
          id="characterName"
          onChange={(e) => setCharacterName(e.target.value)}
        />

        <button onClick={() => loadCharacter(characterName)}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
