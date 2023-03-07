import express from 'express'
import createHttpError from 'http-errors'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

dotenv.config({path:'./.env'})

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createHttpError(404));
});

const PORT = process.env.PORT || 3002
app.listen(PORT, ()=>{
    console.log(`App server is running on port ${PORT}!`);
})