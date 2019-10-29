$(()=>{
    redirectTo(document.getElementsByClassName("item")[0],"../details/details.html")
    redirectTo(document.getElementsByClassName("item")[1].getElementsByTagName("li")[0],"../submit/firstSubmit.html")
    redirectTo(document.getElementsByClassName("item")[1].getElementsByTagName("li")[1],"../submit/secSubmit.html")
    $('.logout').on("click",()=>{
        alert("注销成功")
        window.location.href = "../../login/index/index.html"
    })
})