import express from "express"
import {getMoviesList, postMovie} from '../controllers/movies.controller.js'
const router = express.Router()

router.get('/', getMoviesList)

router.post('/', postMovie)

export default router