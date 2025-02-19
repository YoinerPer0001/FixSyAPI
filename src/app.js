import express from 'express'
import cors from 'cors'
import UserRouter from './routes/user_routes.js';

const app = express()

//Middlewares
app.use(express.json());
app.use(cors())

//Routes
app.use(UserRouter);


export default app;