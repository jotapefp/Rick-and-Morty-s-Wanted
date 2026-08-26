/**
 * CharacterContext.tsx
 *
 * WHY THIS FILE EXISTS:
 * Navbar and Home are sibling components — both rendered inside App,
 * with Home mounted through React Router's <Outlet />. Because they
 * don't have a direct parent-child relationship, there was no way for
 * a click on the Navbar's "Home" link to reset the search state
 * (characters, error) that lived locally inside Home.
 *
 * Instead of lifting that state up to App and threading it through
 * props (which gets awkward with <Outlet />, and doesn't scale once
 * more pages need to read or update character data), this Context
 * centralizes the character search state and logic in one place.
 * Any component in the tree — now or in the future — can read from
 * or update this state via the useCharacterContext() hook, without
 * prop drilling.
 *
 * It also exposes `resetKey`, a counter used purely as a React `key`
 * on <Search />. Incrementing it forces Search to unmount/remount,
 * clearing its internal input state — something the Context can't
 * do directly, since the typed text lives in Search's own useState.
 */

import { createContext, useContext, useState, type ReactNode } from "react";
import { type CharacterProps } from "../types/Characters";

interface CharacterContextType {
  characters: CharacterProps[];
  error: boolean;
  resetKey: number;
  loadCharacter: (characterName: string) => Promise<void>;
  resetSearch: () => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined,
);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [error, setError] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const loadCharacter = async (characterName: string) => {
    setError(false);

    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
          characterName,
        )}`,
      );

      if (res.status === 404) {
        setCharacters([]);
        setError(true);
        return;
      }

      const data = await res.json();
      setCharacters(data.results);
    } catch {
      setError(true);
    }
  };

  const resetSearch = () => {
    setCharacters([]);
    setError(false);
    setResetKey((prev) => prev + 1);
  };

  return (
    <CharacterContext.Provider
      value={{ characters, error, resetKey, loadCharacter, resetSearch }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      "useCharacterContext have to be used outside of a CharacterProvider",
    );
  }
  return context;
};
