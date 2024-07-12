import { create } from "zustand";
import dayjs from "dayjs";

const useDateStore = create((set) => ({
  selectedDate: null,
  formattedDate: "",
  availableTimes: [],
  selectedTime: "",
  selectedMovieHall: "",
  selectedTimeType: "",
  selectedTimePrice: 0,
  selectedSeats: [],
  quantity: 0,
  total: 0,
  availableDates: {},

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

  setAvailableTimes: (times) => set({ availableTimes: times }),

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

  setAvailableDates: (dates) => set({ availableDates: dates }),

  setSelectedSeats: (seats) => set({ selectedSeats: seats }),

  setQuantity: (quantity) =>
    set((state) => {
      const total = quantity * state.selectedTimePrice;
      return { quantity, total };
    }),

  incrementQuantity: () =>
    set((state) => {
      const newQuantity = state.quantity + 1;
      return {
        quantity: newQuantity,
        total: newQuantity * state.selectedTimePrice,
      };
    }),

  decrementQuantity: () =>
    set((state) => {
      const newQuantity = state.quantity > 0 ? state.quantity - 1 : 0;
      return {
        quantity: newQuantity,
        total: newQuantity * state.selectedTimePrice,
      };
    }),

  updateTotal: () =>
    set((state) => {
      return {
        total: state.quantity * state.selectedTimePrice,
      };
    }),
}));

export default useDateStore;
