import type { CharacterProps } from "../types/Characters";

// Components
import Search from "../components/Search";
import CharacterCard from "../components/CharacterCard";

import { useState } from "react";

const Home = () => {
  const [character, setCharacter] = useState<CharacterProps[]>([]);

  const loadCharacter = async (characterName: string) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${characterName}`,
      );

      if (!res.ok) {
        throw new Error("Personagem não encontrado");
      }

      const data = await res.json();

      const charactersData: CharacterProps[] = data.results.map(
        (character: CharacterProps) => ({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: {
            name: character.origin.name,
          },
          location: {
            name: character.location.name,
          },
          image: character.image,
        }),
      );

      setCharacter(charactersData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Search loadCharacter={loadCharacter} />
      {character.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
};

export default Home;
