const express = require('express');
const app = express()

require('dotenv').config()

const data={
   1:'jay',
   2:'raj'
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
   res.send('jayant.com');
})

app.get('/github',(req,res)=>{
    res.json(data)
})

app.get('/@also',(req,res)=>{
    res.send('be extra extra extra');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})