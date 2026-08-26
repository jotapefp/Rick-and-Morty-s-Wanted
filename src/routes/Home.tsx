import Search from "../components/Search";
import CharacterCard from "../components/CharacterCard";
import Error from "../components/Error";
import { useCharacterContext } from "../context/CharacterContext";

const Home = () => {
  const { characters, error, loadCharacter, resetKey } = useCharacterContext();

  return (
    <div>
      <Search key={resetKey} loadCharacter={loadCharacter} />

      {characters.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}

      {error && <Error />}
    </div>
  );
};

export default Home;
