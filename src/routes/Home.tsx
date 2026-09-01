import Search from "../components/Search";
import CharacterCard from "../components/CharacterCard";
import { useCharacterContext } from "../context/CharacterContext";
import classes from "./Home.module.css";

const Home = () => {
  const { characters, error, loadCharacter, resetKey } = useCharacterContext();

  return (
    <div>
      <Search key={resetKey} loadCharacter={loadCharacter} />
      <div className={classes.characterList}>
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>
      <div className={classes.error}>
        {error && <p>Character not found in this dimension</p>}
      </div>
    </div>
  );
};

export default Home;
