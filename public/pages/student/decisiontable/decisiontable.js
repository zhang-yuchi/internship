$(()=>{
    redirectTo(document.getElementsByClassName("item")[0],"/student")
    redirectTo(document.getElementsByClassName("item")[1].getElementsByTagName("li")[0],"/student/first")
    redirectTo(document.getElementsByClassName("item")[1].getElementsByTagName("li")[1],"/student/twice")
    $('.logout').on("click",()=>{
        alert("注销成功")
        localStorage.setItem("userinfo","")
        window.location.href = "/logout"
    })
    $.ajax({
        type:"get",
            url:`${config.ip}:${config.port}/student/identify`,
            dataType:"json",
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
            },
            success:(data)=>{
                console.log(data)
                const msg = data.data
                practiceContent.value = msg.sxContent
                selfSummary.value = msg.selfSummary
            },
            error:(err)=>{
                alert("服务器繁忙,请重试")
            }
    })




    $('.submit').on("click",()=>{
        let pra = practiceContent.value
        let summary = selfSummary.value
        $.ajax({
            type:"post",
            url:`${config.ip}:${config.port}/student/identify`,
            dataType:"json",
            data:{
                practiceContent:pra,
                selfSummary:summary
            },
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
            },
            success:function(){
                alert("提交成功!")
                window.location.href = "/student"
            }
        })
    })
})