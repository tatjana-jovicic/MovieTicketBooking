import { create } from "zustand";

const useSelectMovieStore = create((set) => ({
  selectedMovie: null,
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),
}));

export default useSelectMovieStore;
