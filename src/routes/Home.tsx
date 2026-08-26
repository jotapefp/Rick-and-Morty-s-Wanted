import type { CharacterProps } from "../types/Characters";

// Components
import Search from "../components/Search";

import { useState } from "react";

const Home = () => {
  const [character, setCharacter] = useState<CharacterProps | null>(null);

  const loadCharacter = async (CharacterName: string) => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${CharacterName}`,
    );
    const data = await res.json();

    const { name, status, species, gender, origin, location, id, image } =
      data.results[0];

    const characterData: CharacterProps = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      location,
      image,
    };

    setCharacter(characterData);
  };

  return (
    <div>
      <Search loadCharacter={loadCharacter} />
      {character && (
        <div>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
          <img src={character.image} alt={character.name} />
        </div>
      )}
    </div>
  );
};

export default Home;
