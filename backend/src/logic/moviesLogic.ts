import { RequestTimeoutError } from "../models/ErrorModel";
import { MovieType, validateMovie } from "../models/MovieModel";
import { Movie } from "../utils/dal";


export const addNewMovieLogic = async (newMovie: MovieType): Promise<MovieType> => {
    validateMovie(newMovie)
    try {
        const addedMovie = await new Movie({
            movieName: newMovie.movieName,
            movieImgUrl: newMovie.movieImgUrl,
            movieReleaseYear: newMovie.movieReleaseYear,
            movieLength: newMovie.movieLength,
            movieTitles: newMovie.movieTitles,
            movieDescription: newMovie.movieDescription,
            movieRateing: newMovie.movieRateing,
            movieTrailer: newMovie.movieTrailer,
        }) as MovieType
        await addedMovie.save()
        console.log("Movie saved succesfuly!")
        return addedMovie
    } catch (error) {
        RequestTimeoutError(error)
    }
}