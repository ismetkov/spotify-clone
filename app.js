import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressValidator from 'express-validator';
import routes from './routes';
import errorHandlers from './handlers/errorHandlers';

import './handlers/passport';

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use('/', routes);

app.use(errorHandlers.notFound);

app.use(errorHandlers.serverError);

export default app;
