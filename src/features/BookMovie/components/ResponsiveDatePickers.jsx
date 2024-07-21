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
import useBookStore from "../../../stores/book/book.store.js";

const ResponsiveDatePickers = () => {
  const {
    selectedDate,
    availableTimes,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
    availableDates,
  } = useBookStore();

  //funkcija koja se poziva kada korisnik izabere novo vrijeme
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  //funkcija koja odredjuje da li bi odredjeni datum trebao biti onemogucen u DatePicker komponenti
  //ako datum nije u availableDates, vraca true da bi ga onemogucio
  const shouldDisableDate = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    return !availableDates.hasOwnProperty(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          shouldDisableDate={shouldDisableDate}
          sx={{
            width: "45%",
            backgroundColor: "rgba(226, 208, 208, 0.566)",
            borderRadius: "10px",
          }}
          slots={{
            textField: (params) => <TextField {...params} />,
          }}
        />
        {availableTimes.length > 0 && (
          <FormControl
            fullWidth
            sx={{
              width: "45%",
              backgroundColor: "rgba(226, 208, 208, 0.566)",
              borderRadius: "10px",
            }}
          >
            <InputLabel
              id="time-select-label"
              sx={{
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
              }}
            >
              Available Times and Types
            </InputLabel>
            <Select
              labelId="time-select-label"
              id="time-select"
              value={selectedTime}
              onChange={handleTimeChange}
            >
              {availableTimes.map((timeObj, index) => (
                <MenuItem key={index} value={timeObj.time}>
                  {timeObj.time} ({timeObj.type})
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
