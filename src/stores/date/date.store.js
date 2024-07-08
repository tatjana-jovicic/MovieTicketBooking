import { create } from "zustand";
import dayjs from "dayjs";

const useDateStore = create((set) => ({
  selectedDate: dayjs(),
  availableTimes: [],
  selectedTime: "",
  setSelectedDate: (date) =>
    set((state) => {
      const formattedDate = date.format("YYYY-MM-DD");
      const times = state.availableDates[formattedDate] || [];
      return {
        selectedDate: date,
        availableTimes: times,
        selectedTime: times.length > 0 ? times[0] : "",
      };
    }),
  setAvailableTimes: (times) => set({ availableTimes: times }),
  setSelectedTime: (time) => set({ selectedTime: time }),
  setAvailableDates: (dates) => set({ availableDates: dates }),
  availableDates: {},
}));

export default useDateStore;
