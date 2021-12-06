const express = require('express');
const path = require('path');
const route = express.Router();
const app = express();


route.use((req,res,next)=>{
    console.log('middleware being used');
    next();
});
app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');

const people = require('./routes/people');

app.use('/people',people);

app.listen(3000);