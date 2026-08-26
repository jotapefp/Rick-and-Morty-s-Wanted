import type { CharacterProps } from "../types/Characters";

import classes from "./CharacterCard.module.css";

// Print the character information in a card format
const CharacterCard = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
}: CharacterProps) => {
  return (
    <div className={classes.characterComponent}>
      <div className={classes.characterCard}>
        <h3>{name} e ID: {id}</h3>
        <p>State: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin?.name}</p>
        <p>Location: {location?.name}</p>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default CharacterCard;
