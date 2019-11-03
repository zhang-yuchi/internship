$(() => {
    $('body').delegate('.controls button:first',"click",function(){
        window.location.href = "/student/reports-details"
    })
    $('body').delegate('.controls button:last',"click",function(){
        window.location.href = "/student/decision-details"
    })

    redirectTo(document.getElementsByClassName('list')[0].getElementsByTagName('li')[0],
        "/student/first");
    redirectTo(document.getElementsByClassName('list')[0].getElementsByTagName('li')[1],
        "/student/twice");
    redirectTo(document.getElementsByClassName("item")[2], "/student-decision")
    //---------------请求学生信息---------------------
    $.ajax({
        type:"get",
        url:`${config.ip}:${config.port}/student/selfInfo`,
        dataType:"json",
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
        },
        success:function(data){
            let std = data.data
            let stdTemplate = ` <div class="title">学生信息</div>
            <div class="text"><span>姓名</span>${std.name}</div>
            <div class="text"><span>学号</span>${std.stuNo}</div>
            <div class="text"><span>微信</span>${std.wechat}</div>
            <div class="text"><span>专业</span>${std.major}</div>
            <div class="text"><span>身份证号</span>${std.idCard}</div>
            <div class="text">${std.college}</div>
            <div class="text"></div>
            <div class="controls"><button>实习报告表</button><button>实习鉴定表</button></div>`
            $('.student-info').html(stdTemplate)
            // console.log(std)
        },
        error:function(err){
            console.log(err)
        }
    })
    //---------------请求老师信息---------------------
    $.ajax({
        type:"get",
        url:`${config.ip}:${config.port}/student/teacherInfo`,
        dataType:"json",
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
        },
        success:function(data){
            let teacher = data.data
            let teacherTemplate = `<div class="title">导师信息</div>
            <div class="text"><span>姓名</span>${teacher.name}</div>
            <div class="text"><span>性别</span>${teacher.sex}</div>
            <div class="text"><span>年龄</span>${teacher.age}</div>
            <div class="text"><span>工号</span>${teacher.teacherNo}</div>
            <div class="text">${teacher.college}</div>
            <div class="text"></div>`
            $(".teacher-info").html(teacherTemplate)
        },
        error:function(err){
            alert("服务器繁忙,请稍后重试!")
        }
    })

    $('.logout').on("click", () => {
        alert("注销成功")
        window.location.href = "/logout"
    })
    
})