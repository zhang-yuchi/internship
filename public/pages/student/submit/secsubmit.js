window.onload = ()=>{
    redirectTo(document.getElementsByClassName("list")[0].getElementsByTagName('li')[0],"/student/first")

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
                summary.value = msg.stage2Summary
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
        let stage2_summary = summary.value
        // console.log(stage1_summary)
        $.ajax({
            type:"post",
            url:`${config.ip}:${config.port}/student/report/stage2`,
            dataType:"json",
            data:{
                stage2_summary:stage2_summary
            },
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
            },
            success:(data)=>{
                alert("提交成功!")
                window.location.href = "/student"
            }
        })
    })
}