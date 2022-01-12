import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import mysql from 'mysql';

import cors from 'cors'
import AppRoute from './routes/appRoute.js'


const app = express();

// app.use('/', rootRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/', rootRoutes);
AppRoute(app);
// mongodb+srv://usergunesh:<password>@cluster0.znykm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const CONNECTION_URL = 'mongodb+srv://usergunesh:passwordgunesh@cluster0.znykm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// MongoDB Connection
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => {
//         console.log(`Server Running on port: ${PORT}`)
//     }))
//     .catch((error) => console.log(error.message));

// MySQL Connection
const ms = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nz'
});
try {
    ms.connect();
    app.listen(PORT, () => {
        console.log(`Server Running on port: ${PORT}`)
    })
} catch (error) {
    console.log(`Error: ${error.message}`)
}
