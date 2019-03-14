const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('index',{title:'EJS Template Demo'})
})
router.get('/contact',(req,res)=>{
    res.send('Contact Page')
})
module.exports = router