import React, { useEffect, useState } from 'react';
import getTMDBData from '../Services/api/marvelApi';
import { MovieCard } from './card';
import { MoviesBox } from '../Styles/marvelMovieStyled';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export const MarvelMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarvelMovies = async () => {
      try {
        const data = await getTMDBData<{ results: Movie[] }>('discover/movie', {
          with_companies: 420,
          sort_by: 'popularity.desc',
        });

        setMovies(data.results);
      } catch (err) {
        setError('The data is out there... but not here.');
      }
    };

    fetchMarvelMovies();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <MoviesBox>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieName={movie.title}
          movieReleaseYear={movie.release_date}
          movieImgUrl={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
      ))}
    </MoviesBox>
  );
};