import { create } from "zustand";

const useGenreStore = create((set) => ({
  selectedGenre: "",
  setSelectedGenre: (genre) => set({ selectedGenre: genre }),
}));

export default useGenreStore;
