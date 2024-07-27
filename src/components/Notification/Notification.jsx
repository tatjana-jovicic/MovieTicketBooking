import useNotificationStore from "../../stores/notification/notification.store";
import { Snackbar, Alert } from "@mui/material";

const Notification = () => {
  const { isOpen, text, severity, setClose } = useNotificationStore();

  const handleClose = () => {
    setClose();
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
