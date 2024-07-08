import { create } from "zustand";
import dayjs from "dayjs";

const useDateStore = create((set) => ({
  selectedDate: dayjs(),
  availableTimes: [],
  selectedTime: "",
  selectedMovieHall: "",
  setSelectedDate: (date) =>
    set((state) => {
      const formattedDate = date.format("YYYY-MM-DD");
      const times = state.availableDates[formattedDate] || [];
      return {
        selectedDate: date,
        availableTimes: times,
        selectedTime: times.length > 0 ? times[0].time : "",
        selectedMovieHall: times.length > 0 ? times[0].hall : "",
      };
    }),
  setAvailableTimes: (times) => set({ availableTimes: times }),
  setSelectedTime: (time) =>
    set((state) => {
      const selected = state.availableTimes.find((t) => t.time === time) || {};
      return {
        selectedTime: time,
        selectedMovieHall: selected.hall || "",
      };
    }),
  setAvailableDates: (dates) => set({ availableDates: dates }),
  availableDates: {},
}));

export default useDateStore;
