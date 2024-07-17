import useNotificationStore from "../../stores/notification/notification.store";
import { Snackbar, Alert } from "@mui/material";

const Notification = () => {
  const { isOpen, text, severity, setClose } = useNotificationStore();

  const handleClose = () => {
    setClose();
  };

  console.log("Notification State:", { isOpen, text, severity });

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
