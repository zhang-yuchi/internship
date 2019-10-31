var express = require('express')
var router = express.Router()
//登录页面
router.get('/login',function(req,res){
    res.render('./login/index.html')
})
//登录到学生信息页面
router.get('/student',function(req,res){
    res.render('./student/details/details.html')
})

//登录老师学生列表页面
router.get('/teacher',function(req,res){
    res.render('./teacher/report-stuList/studentlist.html')
})
//老师报告册列表
router.get('/teacher-reportlist',function(req,res){
    res.render('./teacher/report-stuList/report-table.html')
})
//老师鉴定表列表
router.get('/teacher-decisionlist',function(req,res){
    res.render('./teacher/report-stuList/decision-table.html')
})
//老师填写报告册
router.get('/teacher-report',function(req,res){
    res.render('./teacher/report-comment/report-comment.html')
})
//老师填写鉴定表
router.get('/teacher-decision',function(req,res){
    res.render('./teacher/report-comment/decision-comment.html')
})

//注销
router.get('/logout',function(req,res){
    res.render('./login/index.html')
})

module.exports = router