import dayjs from "dayjs";
import { useState } from "react";
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

const ResponsiveDatePickers = ({ availableDates }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.format("YYYY-MM-DD");
    setAvailableTimes(availableDates[formattedDate] || []);
  };

  const shouldDisableDate = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    return !availableDates.hasOwnProperty(formattedDate);
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
          textField={(props) => <TextField {...props} />}
        />
        {availableTimes.length > 0 && (
          <FormControl fullWidth style={{ maxWidth: "230px" }}>
            <InputLabel id="time-select-label">Available Times</InputLabel>
            <Select
              labelId="time-select-label"
              id="time-select"
              value={availableTimes.length > 0 ? availableTimes[0] : ""}
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
