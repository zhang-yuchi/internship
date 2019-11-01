$(()=>{
    redirectTo(document.getElementsByClassName("item")[0],"/student")
    redirectTo(document.getElementsByClassName("item")[1].getElementsByTagName("li")[0],"/student/first")
    redirectTo(document.getElementsByClassName("item")[1].getElementsByTagName("li")[1],"/student/twice")
    $('.logout').on("click",()=>{
        alert("注销成功")
        window.location.href = "/logout"
    })
})