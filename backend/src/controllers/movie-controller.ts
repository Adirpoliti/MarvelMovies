import express, { NextFunction, Request, Response } from 'express'
import { MovieType } from '../models/MovieModel';
import { addNewMovieLogic, findMovieLogic, getAllMoviesLogic } from '../logic/moviesLogic';

const router = express.Router()


router.get('/movies/all', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await getAllMoviesLogic();
        res.json(response);
    } catch (err) {
        next(err);
    }
});

router.get('/movies/search/:query', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchString = req.params.query as string;
        const response = await findMovieLogic(searchString);
        res.json(response);
    } catch (err) {
        next(err);
    }
});

router.post('/movies/new', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newMovie = req.body as MovieType
      const addedMovie = await addNewMovieLogic(newMovie)
        res.status(201).json(addedMovie);
    } catch (err) {
        next(err)
    }
});

export default router