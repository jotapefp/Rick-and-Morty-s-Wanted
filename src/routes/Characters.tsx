import Search from "../components/SearchCharacter";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import { useCharacterContext } from "../context/CharacterContext";
import classes from "./Characters.module.css";

const Characters = () => {
  const { characters, error, loadCharacter, resetKey } = useCharacterContext();

  return (
    <div>
      <Search key={resetKey} loadCharacter={loadCharacter} />

      <div className={classes.characterList}>
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>

      {/* Some'oculto automaticamente enquanto totalPages <= 1 (antes da
          primeira busca, ou quando a busca retorna só uma página) */}
      <Pagination />

      <div className={classes.error}>
        {error && <p>Character not found in this dimension</p>}
      </div>
    </div>
  );
};

export default Characters;
