const express = require('express');

const app = express();

const dotenv = require('dotenv').config()

const db = require('./models/index');
const userRoute = require('./routes/user.routes')

const port =process.env.PORT||3000;

app.use(express.json())

app.get("/", userRoute);


app.listen(port,()=>{
        db.sequelize.sync().then(() => {
        console.log("db has been synced")
    })
    console.log(`Connected to port ${port}`)
})


