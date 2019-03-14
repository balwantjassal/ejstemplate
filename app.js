const express = require('express')
const app = express()
var engine = require('ejs-locals');

const PORT = process.env.PORT | 3000
//Routing Mechanism Start
const middleware = (req,res,next)=>{
    req.requestTime = Date.now()
    req.author = 'Administrator'
    console.log('Hello Iam Middleware One')
    next()
}


app.use(middleware)
app.set('views','./views')
app.engine('ejs', engine);
app.set('view engine','ejs')

app.use('/',require('./route/main'))
app.use('/user',require('./route/user.js'))
//Routing Ends
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
