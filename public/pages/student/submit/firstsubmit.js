window.onload = ()=>{
    redirectTo(document.getElementsByClassName("list")[0].getElementsByTagName('li')[1],"/student/twice")
    redirectTo(document.getElementsByClassName('item')[0],"/student");
    redirectTo(document.getElementsByClassName('item')[2],"/student-decision");
    
    $('.logout').on("click",()=>{
        alert("注销成功")
        window.location.href = "/logout"
    })
}