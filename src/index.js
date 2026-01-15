import express from 'express';
import dotenv from 'dotenv' ;

dotenv.config();

const app = express()

const port = process.env.PORT || 8888; 

app.get('/home', (req, res) => {
    res.send("Kia Hal hai jan");
})

app.listen(port, () => {
    console.log("Running on " + port)
})