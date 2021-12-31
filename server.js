const express=require('express');

const path=rewuire('path');

const app=express();

app.use(express.static('./dist/createfun'));

app.get('/*',(req,res)=>
res.sendFile('index.html'),{root:'dist/angular~heroku'});


app.listen(process.env.PORT || 8080);

