import express from "express";

const app = express();

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), ()=>{
    console.log("esto es una prueba del backend "+ app.get('PORT'));
})
