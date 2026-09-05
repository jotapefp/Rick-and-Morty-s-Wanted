import { type CharacterProps } from "../types/Characters";

import classes from "./CharacterDetails.module.css";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<CharacterProps | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      const data = await res.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div className={classes.characterDetails}>Loading...</div>;
  }

  return (
    <div className={classes.characterDetails}>
      <h2>{character.name}</h2>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
      <p>Origin: {character.origin?.name}</p>
      <p>Last Location: {character.location?.name}</p>
      <p>Appearances: {character.episode.length}</p>
      <p>Type: {character.type || "Unknown"}</p>
      <img src={character.image} alt={character.name} />
      

    </div>
  );
};

export default CharacterDetails;
