import axios from "axios";
import { apiConfig } from "./api/apiConfig";

export const getAllMoviesService = async () => {
  return axios
    .get(apiConfig.apiAllMovies)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const searchedMovieServies = async (seacrhWord: string) => {
  return axios
    .get(apiConfig.apiSearchedMovies + `${seacrhWord}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
