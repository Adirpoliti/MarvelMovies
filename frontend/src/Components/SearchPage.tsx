import { useEffect, useState } from "react";
import { Movie } from "../Types/movieType";
import { getAllMoviesService } from "../Services/moviesService";
import { MoviesBox } from "../Styles/searchPage";
import { MovieCard } from "./MovieCard";
import { SearchInput } from "./SearchInput";
import { SearchBarContainer } from "../Styles/searchInput";
import SearchIcon from "@mui/icons-material/Search";
import MovieDialog from "./MovieDialog";

export const SearchPage = () => {
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);
  const [filteredSearchResults, setFilteredSearchResults] = useState<Movie[]>(
    []
  );
  const [searchValue, setSearchValue] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllMoviesService();
        setFetchedMovies(data);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    const filteredData = fetchedMovies.filter((movie) =>
      new RegExp(value, "i").test(movie.movieName)
    );
    setFilteredSearchResults(filteredData);
  };

  return (
    <>
      <SearchBarContainer>
        <SearchIcon htmlColor="white" />
        <SearchInput
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </SearchBarContainer>
      <MoviesBox>
        {filteredSearchResults.length > 0
          ? filteredSearchResults.map((movie, index) => (
              <MovieCard
                key={index}
                movieName={movie.movieName}
                movieReleaseYear={movie.movieReleaseYear}
                movieImgUrl={movie.movieImgUrl}
                movieDescription={movie.movieDescription}
                movieRateing={movie.movieRateing}
                onClick={() => handleOpenModal(movie)}
              />
            ))
          : fetchedMovies.map((movie, index) => (
              <MovieCard
                key={index}
                movieName={movie.movieName}
                movieReleaseYear={movie.movieReleaseYear}
                movieImgUrl={movie.movieImgUrl}
                movieDescription={movie.movieDescription}
                movieRateing={movie.movieRateing}
                onClick={() => handleOpenModal(movie)}
              />
            ))}
      </MoviesBox>
      <MovieDialog
        isOpen={isModalOpen}
        isClose={handleCloseModal}
        movie={selectedMovie}
      />
    </>
  );
};
