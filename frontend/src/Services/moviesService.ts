import axios from "axios";
import { apiConfig } from "./api/apiConfig";
import { Movie } from "../Types/movieType";

export const getAllMoviesService = async (): Promise<Movie[]> => {
  return axios
    .get(apiConfig.apiAllMovies)
    .then((res) => res.data)
    .catch((err) => console.log("The data is out there... but not here."));
};

export const searchedMovieServies = async (seacrhWord: string) => {
  return axios
    .get(apiConfig.apiSearchedMovies + `${seacrhWord}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
