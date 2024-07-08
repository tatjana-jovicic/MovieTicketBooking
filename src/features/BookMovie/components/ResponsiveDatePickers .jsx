import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import useDateStore from "../../../stores/date/date.store";

const ResponsiveDatePickers = () => {
  const {
    selectedDate,
    availableTimes,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
  } = useDateStore();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const shouldDisableDate = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    return !useDateStore
      .getState()
      .availableDates.hasOwnProperty(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          shouldDisableDate={shouldDisableDate}
          renderInput={(params) => <TextField {...params} />}
        />
        {availableTimes.length > 0 && (
          <FormControl fullWidth style={{ maxWidth: "230px" }}>
            <InputLabel id="time-select-label">Available Times</InputLabel>
            <Select
              labelId="time-select-label"
              id="time-select"
              value={selectedTime}
              onChange={handleTimeChange}
            >
              {availableTimes.map((time, index) => (
                <MenuItem key={index} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
    </LocalizationProvider>
  );
};

export default ResponsiveDatePickers;
