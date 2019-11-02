window.onload = ()=>{
    redirectTo(document.getElementsByClassName("list")[0].getElementsByTagName('li')[1],"/student/twice")
    redirectTo(document.getElementsByClassName('item')[0],"/student");
    redirectTo(document.getElementsByClassName('item')[2],"/student-decision");
    $.ajax({
        type:"get",
            url:`${config.ip}:${config.port}/student/report`,
            dataType:"json",
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
            },
            success:(data)=>{
                const msg = data.data
                summary.value = msg.stage1Summary
            },
            error:(err)=>{
                alert("服务器繁忙,请重试")
            }
    })

    $('.logout').on("click",()=>{
        alert("注销成功")
        localStorage.setItem("userinfo","")
        window.location.href = "/logout"
    })


    $(".submit").on("click",()=>{
        let stage1_summary = summary.value
        // console.log(stage1_summary)
        $.ajax({
            type:"post",
            url:`${config.ip}:${config.port}/student/report/stage1`,
            dataType:"json",
            data:{
                stage1_summary:stage1_summary
            },
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
            },
            success:(data)=>{
                alert("提交成功!")
                // console.log(data)
                window.location.href = "/student"
            }
        })
    })
}