import express from 'express';
import cors from "cors";
import { catchAll } from './middleware/catch-all';
import { loggedRequest } from './middleware/log-request';
import movieController from './controllers/movie-controller'
import versionController from './controllers/versionController';

const port = 3001;
const server = express()

server.use(express.json())

server.use(cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
    credentials: true,
}));

server.use(loggedRequest)

server.use('/api', movieController)
server.use('/v', versionController)

server.use(catchAll)

server.listen(port, () => console.log(`server runing on port ${port}`))