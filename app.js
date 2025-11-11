require('dotenv').config();
const express = require('express');
const db = require('./db');
const rateLimiter = require('express-rate-limit');
const cors = require('cors');

const limit = rateLimiter({
    windowMs:15*60*1000,
    max:15,
    message:'Hello, Thambi'
})




const app = express();
app.use(express.json());
app.use(limit);

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  allowedHeaders: ['x-api-key', 'Content-Type'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(apiKeyMiddleware);

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

function apiKeyMiddleware(req, res, next) {
  const key = req.header('x-api-key');

  if (!key) return res.status(401).json({ error: 'Missing API key' });
  if (key !== process.env.API_KEY) {
    return res.status(403).json({ error: 'Invalid API key' });
  }

  next();
}

// app.options('*', cors());

app.get('/v1/users',(req,res)=>{
    db.query('SELECT * FROM users',(err,results)=>{
        if(err) return res.status(500).send(err);
        res.json(results);
    });

});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});