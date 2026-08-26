type SearchProps = {
  loadCharacter: (CharacterName: string) => Promise<void>;
};

import { useState } from "react";

const Search = ({ loadCharacter }: SearchProps) => {
  const [characterName, setCharacterName] = useState("");

  return (
    <div>
      <h2>Coloque o nome do personagem:</h2>
      <input
        type="text"
        placeholder="Nome do personagem"
        id="characterName"
        onChange={(e) => setCharacterName(e.target.value)}
      />

      <button onClick={() => loadCharacter(characterName)}>Pesquisar</button>
    </div>
  );
};

export default Search;
