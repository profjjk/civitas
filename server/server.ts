import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 8080;

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});