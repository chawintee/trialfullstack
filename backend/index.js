const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const trialRoute = require('./route/trialRoute');
const db = require('./models');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());


app.use("/t",trialRoute);


db.sequelize.sync().then(()=>{

    app.listen(8000,()=>{
        console.log("Server is running on port 8000");
    })

})

