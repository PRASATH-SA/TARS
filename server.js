const express = require('express');
const ip = require('ip');
const app = express();
const cors = require('cors');

// global CORS fix
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Cache-Control', 'no-store'); // prevent 304 caching
  next();
});

app.get('/',(req,res)=>{
    res.send('Abhishek');
});
app.get('/jeevan',(req,res)=>{
    res.send('Jeevan is a gay');
});
app.get('/ques/1',(req,res)=>{
    res.send('Children\’s work marked');
});
app.get('/ques/observation',(req,res)=>{
    // res.send('Does not hit/threaten');
    res.json({
        1:{
            q:'Children\’s work marked',
            1:'No work checked',
            2:'Some work checked, minimal feedback',
            3:'Most/all work checked with feedback'
        },
        2:{
            q:'Does not hit/threaten',
            1:'Uses/threatens punishment',
            2:'No physical harm but harsh threats',
            3:'Never threatens; uses positive discipline'
        },
        3:'Does not insult students',
        4:'Leaves at end of lesson',
        5:'Lesson objectives are SMART',
        6:'Gives summary at lesson end'
    });
});
// app.get('/ans/observation',(req,res)=>{
//     res.json({
//         1:{
           
//         },
//         2:{
            
//         }
//     })
// });

app.use(cors({
  origin: 'http://localhost:5500' // your frontend
}));



app.listen(3000,()=>{
    console.log("Example app is listening on port 3000");
    console.log(ip.address());
});