var express = require('express')
var router = express.Router()
router.get('/login',function(req,res){
    res.render('./login/index.html')
})
router.get('/student',function(req,res){
    res.render('./student/details/details.html')
})


module.exports = router