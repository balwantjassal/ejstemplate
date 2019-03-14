const express = require('express')
const router = express.Router()
router.get('/login',(req,res)=>{
    res.send('Login  Page')
})
router.get('/registration',(req,res)=>{
    res.send('Registration Page request made at '+req.requestTime + '  by '+req.author)
})
module.exports = router