import type { CharacterProps } from "../types/Characters";

// CSS
import classes from "./CharacterCard.module.css";

const CharacterCard = ({ character }: { character: CharacterProps }) => {
  return (
    <div className={classes.characterComponent}>
      <div className={classes.characterCard}>
        <h3>{character.name}</h3>
        <p>State: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin?.name}</p>
        <p>Location: {character.location?.name}</p>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
};

export default CharacterCard;
