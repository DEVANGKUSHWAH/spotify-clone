const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

app.get('/',(req, res)=>{
    console.log('hereeeeeeeeeeee', req  )
    return 1
})

app.listen(3001,()=>{console.log("listening at port 3000")})