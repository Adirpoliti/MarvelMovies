
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import joi from "joi";
import { ValidationError } from "./ErrorModel";

export type MovieType = {
    save(): unknown;
    _id: ObjectId;
    movieName: string;
    movieImgUrl: string;
    movieReleaseYear: Number;
    movieLength: string;
    movieTitles: [string];
    movieDescription: string;
    movieRateing: number;
    movieTrailer: string;
}

export const movieSchema = new mongoose.Schema({
    movieName: String,
    movieImgUrl: String,
    movieReleaseYear: Number,
    movieLength: String,
    movieTitles: [String],
    movieDescription: String,
    movieRateing: Number,
    movieTrailer: String,
})

export const MovieValidationSchema = joi.object({
    movieName: joi.string().required().min(1),
    movieImgUrl: joi.string().required().min(1),
    movieReleaseYear: joi.number().required().min(1900),
    movieLength: joi.string().required().min(1),
    movieTitles: joi.array().required().min(1),
    movieDescription: joi.string().required().min(1),
    movieRateing: joi.number().required().min(1),
    movieTrailer: joi.string().required().min(1),
})

export const validateMovie = (movie: MovieType) => {
    const result = MovieValidationSchema.validate(movie);
    if (result.error) ValidationError(result.error.message);
}