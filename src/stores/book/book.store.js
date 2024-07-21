import { create } from "zustand";
import dayjs from "dayjs";
import { movies as allMovies } from "../../data/moviesdata";

const useBookStore = create((set) => ({
  movies: allMovies,
  selectedDate: null,
  formattedDate: "",
  availableTimes: [],
  selectedTime: "",
  selectedMovieHall: "",
  selectedTimeType: "",
  selectedTimePrice: 0,
  quantity: 0,
  total: 0,
  selectedSeats: [],
  availableDates: {},
  occupiedSeats: {},
  purchasedTickets: [],
  selectedMovie: JSON.parse(localStorage.getItem("selectedMovie")) || null, //izabrani film (preuzeto iz localStorage ako postoji)
  selectedGenre: "",

  setMovies: (movies) => set({ movies }), // Funkcija za ažuriranje filmova
  setSelectedMovie: (movie) => {
    localStorage.setItem("selectedMovie", JSON.stringify(movie)); //postavlja izabrani film i cuva ga u localStorage
    set({ selectedMovie: movie });
  },
  setSelectedGenre: (genre) => set({ selectedGenre: genre }),
  setAvailableTimes: (times) => set({ availableTimes: times }),
  setAvailableDates: (dates) => set({ availableDates: dates }),
  setSelectedSeats: (seats) => set({ selectedSeats: seats }),

  //postavlja izabrani datum i azurira dostupna vremena i ostale informacije u vezi sa izabranim datumom
  setSelectedDate: (date) => {
    const formattedDate = date ? dayjs(date).format("YYYY-MM-DD") : "";
    set((state) => {
      const times = state.availableDates[formattedDate] || [];
      return {
        selectedDate: date,
        formattedDate: formattedDate,
        availableTimes: times,
        selectedTime: times.length > 0 ? times[0].time : "",
        selectedMovieHall: times.length > 0 ? times[0].hall : "",
        selectedTimeType: times.length > 0 ? times[0].type : "",
        selectedTimePrice: times.length > 0 ? times[0].price : 0,
        quantity: times.length > 0 ? 1 : 0,
        total: times.length > 0 ? times[0].price : 0,
        selectedSeats: [],
      };
    });
  },

  //postavlja izabrano vrijeme i azurira informacije o vremenu, sali, tipu i cijeni
  setSelectedTime: (time) =>
    set((state) => {
      const selected = state.availableTimes.find((t) => t.time === time) || {};
      return {
        selectedTime: time,
        selectedMovieHall: selected.hall || "",
        selectedTimeType: selected.type || "",
        selectedTimePrice: selected.price || 0,
        quantity: 1,
        total: selected.price || 0,
        selectedSeats: [],
      };
    }),

  incrementQuantity: () =>
    set((state) => {
      const newQuantity = state.quantity + 1;
      const newTotal = newQuantity * state.selectedTimePrice;
      return {
        quantity: newQuantity,
        total: newTotal,
      };
    }),

  decrementQuantity: () =>
    set((state) => {
      const newQuantity = state.quantity > 0 ? state.quantity - 1 : 0;
      const newTotal = newQuantity * state.selectedTimePrice;
      return {
        quantity: newQuantity,
        total: newTotal,
      };
    }),

  //dodaje kupljene karte u stanje i azurira zauzeta sjedista
  purchaseTickets: (movie, date, time, seats) =>
    set((state) => {
      if (!movie || !date || !time || !seats.length) {
        console.error("Invalid ticket information provided.");
        return state;
      }

      const key = `${movie}_${date}_${time}`;
      const newOccupiedSeats = [...(state.occupiedSeats[key] || []), ...seats];
      const ticket = { movie, date, time, seats };

      return {
        purchasedTickets: [...state.purchasedTickets, ticket],
        occupiedSeats: {
          ...state.occupiedSeats,
          [key]: newOccupiedSeats,
        },
      };
    }),

  //vraca stanje na pocetne vrijednosti
  resetState: () =>
    set({
      selectedDate: null,
      formattedDate: "",
      availableTimes: [],
      selectedTime: "",
      selectedMovieHall: "",
      selectedTimeType: "",
      selectedTimePrice: 0,
      quantity: 0,
      total: 0,
      selectedSeats: [],
    }),
}));

export default useBookStore;

//da li je bolji ovaj nacin ili onaj gore?

// setQuantity: (quantity) =>
//   set((state) => {
//     const total = quantity * state.selectedTimePrice;
//     return { quantity, total };
//   }),

// incrementQuantity: () =>
//   set((state) => {
//     const newQuantity = state.quantity + 1;
//     return {
//       quantity: newQuantity,
//       total: newQuantity * state.selectedTimePrice,
//     };
//   }),

// decrementQuantity: () =>
//   set((state) => {
//     const newQuantity = state.quantity > 0 ? state.quantity - 1 : 0;
//     return {
//       quantity: newQuantity,
//       total: newQuantity * state.selectedTimePrice,
//     };
//   }),
