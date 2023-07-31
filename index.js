import express from "express";
import cors from 'cors';
import * as dotenv from 'dotenv';
import morgan from "morgan";
import path from "path";

dotenv.config();

const app = express();

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), ()=>{
    console.log("esto es una prueba del backend "+ app.get('PORT'));
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, "/public")));

// http://localhost:4000/prueba
app.get('/prueba', (req, res)=>{
    res.send('Esta es una prueba de mi ruta GET')
})