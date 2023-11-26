import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

//Routes
import authRouter from './routes/authRoutes.js';

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());

app.use('/api', authRouter);

app.listen(port, () => {
    console.log(
        `Server is listening on ${port} and starting at http://localhost:${port}`
    );
});
