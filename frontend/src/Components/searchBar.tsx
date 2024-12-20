import { useState } from "react";
import { Movie } from "../Types/movieType";
import { useForm } from "react-hook-form";
import { IconButton } from "@mui/material";
import { searchedMovieServies } from "../Services/moviesService";
import { SearchBarContainer, SearchBarStyled } from "../Styles/searchBarStyle";
import SearchIcon from "@mui/icons-material/Search";
import { MoviesBox } from "../Styles/marvelMovieStyled";
import { MovieCard } from "./card";

type SearchBarInput = {
  searchValue: string;
};

export const SearchBar = () => {
  const { register, handleSubmit } = useForm<SearchBarInput>();
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const handleUserSearch = async (form: SearchBarInput) => {
    console.log(`the user searched for: ${form.searchValue}`);
    const data = await searchedMovieServies(form.searchValue);
    setSearchResults(data);
    console.log(data);
  };

  return (
    <>
      <SearchBarContainer>
        <form onSubmit={handleSubmit(handleUserSearch)}>
          <SearchBarStyled
            placeholder="Search"
            variant="standard"
            {...register("searchValue")}
          />
          <IconButton type="submit">
            <SearchIcon htmlColor="white" />
          </IconButton>
        </form>
      </SearchBarContainer>

      <MoviesBox>
        {searchResults.map((movie, index) => (
          <MovieCard
            key={index}
            movieName={movie.movieName}
            movieReleaseYear={movie.movieReleaseYear}
            movieImgUrl={movie.movieImgUrl}
          />
        ))}
      </MoviesBox>
    </>
  );
};
