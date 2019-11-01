$(()=>{
    $('.stu-nav').click(function(){
        window.location.href = '/teacher'
    })
    $('.decision-nav').click(function(){
        window.location.href = '/teacher-decisionlist'
    })
    $('.rep-nav').click(function(){
        window.location.href = '/teacher-reportlist'
    })
    $('.return').click(function(){
        window.history.back();
        return false
    })
    $('.logout').on("click",()=>{
        alert("注销成功")
        window.location.href = "/logout"
    })
})