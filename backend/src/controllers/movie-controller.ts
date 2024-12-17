import express, { NextFunction, Request, Response } from 'express'
import { MovieType } from '../models/MovieModel';
import { addNewMovieLogic } from '../logic/moviesLogic';

const router = express.Router()

router.post('/movies/new'), async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newMovie = req.body as MovieType
      const addedMovie = await addNewMovieLogic(newMovie)
        res.status(201).json(addedMovie);
    } catch (err) {
        next(err)
    }
}

export default router