import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Movie } from "../Types/movieType";

interface DialogProps {
  isOpen: boolean;
  isClose: () => void;
  movie: Movie | null;
}
export default function MovieDialog({ isOpen, isClose, movie }: DialogProps) {
  const BetterMovieTitles = () => {
    if (movie?.movieTitles && movie.movieTitles.length > 0) {
      return movie.movieTitles.map((title, index) => (
        <span key={index}>{title} </span>
      ));
    }
    return <span>No titles available.</span>;
  };

  const BetterYoutubeLink = () => {
    const movieId = movie?.movieTrailer.split("?v=")[1];
    const embedlink = "http://www.youtube.com/embed/" + movieId;
    return embedlink;
  };

  return (
    <>
      <Dialog open={isOpen} onClose={isClose}>
        <DialogTitle id="alert-dialog-title">{movie?.movieName}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {movie?.movieLength} {BetterMovieTitles()} <br /><br />
            {movie?.movieDescription}
            <br />
            {
              <iframe
                width="560"
                height="315"
                src={BetterYoutubeLink()}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                
              ></iframe>
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
