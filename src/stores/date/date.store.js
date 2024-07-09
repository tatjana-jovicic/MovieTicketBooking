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
      };
    }),
  setAvailableDates: (dates) => set({ availableDates: dates }),
  availableDates: {},
}));

export default useDateStore;
