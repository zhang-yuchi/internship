$(() => {
    redirectTo($('.controls button:first')[0], "/student/reports-details")
    redirectTo($('.controls button:last')[0], "/student/decision-details")
    redirectTo(document.getElementsByClassName('list')[0].getElementsByTagName('li')[0],
        "/student/first");
    redirectTo(document.getElementsByClassName('list')[0].getElementsByTagName('li')[1],
        "/student/twice");
    redirectTo(document.getElementsByClassName("item")[2], "/student-decision")

    $.ajax({
        type:"get",
        url:`${config.ip}:${config.port}/student/selfInfo`,
        dataType:"json",
        // beforeSend: function(request) {
        //     request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
        // },
        success:function(data){
            console.log(data)
        },
        error:function(err){
            console.log(err)
        }
    })
    $('.logout').on("click", () => {
        alert("注销成功")
        window.location.href = "/logout"
    })
    
})