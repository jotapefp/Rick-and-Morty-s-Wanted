import type { CharacterProps } from "../types/Characters";
import { Link } from "react-router-dom";

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
        <h3>{name}</h3>
        <p>
          Status:{" "}
          <span className={classes[status.toLowerCase()]}>{status}</span>
        </p>
        <p>
          Species: <span>{species}</span>
        </p>
        <p>
          Gender: <span>{gender}</span>
        </p>
        <p>
          Origin: <span>{origin?.name}</span>
        </p>
        <p>
          Last Location: <span>{location?.name}</span>
        </p>
        <img src={image} alt={name} />

        <Link to={`/characterDetails/${id}`}>
          <button className={classes.button}>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
