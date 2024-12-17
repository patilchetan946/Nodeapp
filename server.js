const express = require('express')

const app = express()

app.get('/',(request,response)=>{
response.send('welcome to Pune')
})

app.listen(4000,'0.0.0.0',()=>{
console.log('SErver started on port 4000')
})

