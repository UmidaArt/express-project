import fs from 'fs'

const getMoviesList = (req, res) => {
    const movies = fs.readFileSync('./movies.json', {encoding: 'utf-8'})
    const parsedMovies = JSON.parse(movies)
    res.json(parsedMovies)
}

const postMovie = async (req, res) => {
    const movies = fs.readFileSync('./movies.json')
    const updatedMovies = [...JSON.parse(movies), req.body]
    await fs.writeFileSync('./movies.json', JSON.stringify(updatedMovies, null, 2))
    res.json({status: 'ok'})
}

export {getMoviesList, postMovie}