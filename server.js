import express from "express"
import {connectDB} from './config/database.js'
import moviesRouter from './routers/movies.router.mjs'
import usersRouter from './routers/users.router.mjs'
import postRouter from './routers/posts.router.mjs'
import * as dotenv from 'dotenv'
dotenv.config()

const server = express()
server.use(express.json())

server.use('/users', usersRouter)
server.use('/movies', moviesRouter)
server.use('/posts', postRouter)

server.listen(8000, 'localhost', async () => {
    console.log('server was started')
    await connectDB()
})