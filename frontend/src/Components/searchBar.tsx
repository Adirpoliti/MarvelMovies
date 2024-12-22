import { useEffect, useState } from "react";
import { Movie } from "../Types/movieType";
import { useForm } from "react-hook-form";
import {
  getAllMoviesService,
  searchedMovieServies,
} from "../Services/moviesService";
import { SearchBarContainer, SearchBarStyled } from "../Styles/searchBarStyle";
import { MoviesBox } from "../Styles/marvelMovieStyled";
import { MovieCard } from "./card";
import SearchIcon from "@mui/icons-material/Search";

type SearchBarInput = {
  searchValue: string;
};

export const SearchBar = () => {
  const { register, handleSubmit } = useForm<SearchBarInput>();
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);
  const [filteredSearchResults, setFilteredSearchResults] = useState<Movie[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllMoviesService();
        setFetchedMovies(data);
      } catch (err) {
        console.log("The data is out there... but not here.");
      }
    };

    fetchData();
  }, []);

  const handleUserSearch = async (form: SearchBarInput) => {
    const filteredData = fetchedMovies.filter((movie) =>
      new RegExp(form.searchValue, "i").test(movie.movieName)
    );
    setFilteredSearchResults(filteredData);
  };

  return (
    <>
      <SearchBarContainer onChange={handleSubmit(handleUserSearch)}>
        <SearchIcon htmlColor="white" />
        <SearchBarStyled
          placeholder="Search"
          variant="standard"
          {...register("searchValue")}
        />
      </SearchBarContainer>
      {
        <MoviesBox>
          {filteredSearchResults.length > 0
            ? filteredSearchResults.map((movie, index) => (
                <MovieCard
                  key={index}
                  movieName={movie.movieName}
                  movieReleaseYear={movie.movieReleaseYear}
                  movieImgUrl={movie.movieImgUrl}
                  movieDescription={movie.movieDescription}
                />
              ))
            : fetchedMovies.length > 0
            ? fetchedMovies.map((movie, index) => (
                <MovieCard
                  key={index}
                  movieName={movie.movieName}
                  movieReleaseYear={movie.movieReleaseYear}
                  movieImgUrl={movie.movieImgUrl}
                  movieDescription={movie.movieDescription}
                />
              ))
            : null}
        </MoviesBox>
      }
    </>
  );
};
