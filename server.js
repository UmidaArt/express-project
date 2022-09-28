import express from "express"
import moviesRouter from './routers/movies.router.mjs'
import usersRouter from './routers/users.router.mjs'

const server = express()
server.use(express.json())

server.use('/users', usersRouter)
server.use('/movies', moviesRouter)

server.listen(8000, 'localhost', () => {
    console.log('server was started')
})