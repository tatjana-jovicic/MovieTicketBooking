import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const MovieRating = ({ rating }) => {
  return (
    <Box
      sx={{
        width: 100,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.99, fontSize: "18px" }} />}
        icon={<StarIcon style={{ fontSize: "18px" }} />}
      />
    </Box>
  );
};

export default MovieRating;
