import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app =  express();
const PORT = 4000;

//mongoose connection
// kalau pakai docker : docker run --name some-mongo -p 27017:27017 -d mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

// body parser setup
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


routes(app);

app.get('/',(req,res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT,() => 
    console.log(`Your CODE is WORKING on port ${PORT}`)
);