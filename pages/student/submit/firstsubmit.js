window.onload = ()=>{
    redirectTo(document.getElementsByClassName("list")[0].getElementsByTagName('li')[1],"secSubmit.html")
    redirectTo(document.getElementsByClassName('item')[0],"../details/details.html");
    redirectTo(document.getElementsByClassName('item')[2],"../decisiontable/decisiontable.html");
    
    $('.logout').on("click",()=>{
        alert("注销成功")
        window.location.href = "../../login/index/index.html"
    })
}