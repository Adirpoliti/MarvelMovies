import React, { useEffect, useState } from "react";
import { MovieCard } from "./card";
import { MoviesBox } from "../Styles/marvelMovieStyled";
import { getAllMoviesService } from "../Services/moviesService";
import { Movie } from "../Types/movieType";

export const MarvelMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarvelMovies = async () => {
      try {
        const data = await getAllMoviesService();
        setMovies(data);
      } catch (err) {
        setError("The data is out there... but not here.");
      }
    };

    fetchMarvelMovies();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <MoviesBox>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movieName={movie.movieName}
          movieReleaseYear={movie.movieReleaseYear}
          movieImgUrl={movie.movieImgUrl}
        />
      ))}
    </MoviesBox>
  );
};
