import express from 'express'
import cors from 'cors'
import UserRouter from './routes/user_routes.js';
import techRoutes from './routes/technicians_routes.js';
import tech_espRoutes from './routes/tech_esp_routes.js';
import especialtiesRoutes from './routes/especialties_routes.js';

const app = express()

//Middlewares
app.use(express.json());
app.use(cors())

//Routes
app.use(UserRouter);
app.use(techRoutes);
app.use(tech_espRoutes);
app.use(especialtiesRoutes);


export default app;