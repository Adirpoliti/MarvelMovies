import { movieSchema } from "../models/MovieModel";
const mongoose = require('mongoose')

export const mangooseConnection = mongoose.connect('mongodb+srv://adirpoliti:PFuY8u5ywmMxbpvM@marvelmovies.kgbsj.mongodb.net/?retryWrites=true&w=majority&appName=MarvelMovies',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });

export const Movie = mongoose.model('movies', movieSchema)