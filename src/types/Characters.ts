export type CharacterProps = {
  id: number;
  name: string;
  status: string; //The status of the character ('Alive', 'Dead' or 'unknown').
  species: string; //The gender of the character ('Female', 'Male', 'Genderless' or 'unknown')
  episode: string[]; // (url) List of episodes in which this character appeared.
  type: string; // The type or subspecies of the character.
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string; // (url) Link to the character's image.
};
