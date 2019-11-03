$(()=>{
    let stuinfo = getLocalStorage("std-report-entity")
    // console.log(stuinfo)
    let stuNo = stuinfo.stuNo
    // console.log(stuNo)
    $.ajax({
        type:"GET",
        url:`${config.ip}:${config.port}/teacher/student/${stuNo}`,
        dataType:"json",
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
        },
        success(data){
            let msg = data.data
            // console.log(msg)
            let template = `<div class="window-tittle">
            <span id="">${msg.name}</span>报告册
        </div>
        <div class="content flexbox">
            <div class="content-name">学院：<span id="" class="black">${msg.college}</span></div>
            <div class="content-name">专业：<span id="" class="black">${msg.major}</span></div>
        </div>
        <div class="content flexbox">
            <div class="content-name">姓名：<span id="" class="black">${msg.name}</span></div>
            <div class="content-name">学号：<span id="" class="black">${msg.stuNo}</span></div>
        </div>
        <div class="content flexbox">
            <div class="content-name">学院指导教师工号：<span id="" class="black">${msg.teacherNo}</span></div>
            <div class="content-name">实习单位：<span id="" class="black">${msg.corpName}</span></div>
        </div>
        <div class="content flexbox">
            <div class="content-name">实习岗位：<span id="" class="black">${msg.corpPosition}</span></div>
            
        </div>
        
        
        `   
        let first = `<div class="title">第一阶段</div>
        <div class="content">
            <div class="content-name">第一阶段实习总结</div>
            <div class="inner-content">${stuinfo.stage1Summary?stuinfo.stage1Summary:"暂无内容"}</div>
            <div class="content-name">第一阶段实习指导方式</div>
            <div class="inner-content">${stuinfo.stage1GuideWay?stuinfo.stage1GuideWay:"暂无内容"}</div>
            <div class="time"><span class="time-text">时间</span><span class="time-inner">${stuinfo.stage1GuideDate?stuinfo.stage1GuideDate:""}</span></div>
        </div>`
        let second = `<div class="title">第二阶段</div>
        <div class="content">
            <div class="content-name">第二阶段实习总结</div>
            <div class="inner-content">
            ${stuinfo.stage2Summary?stuinfo.stage2Summary:"暂无内容"}</div>
            <div class="content-name">第二阶段实习指导方式</div>
            <div class="inner-content">${stuinfo.stage2GuideWay?stuinfo.stage2GuideWay:"暂无内容"}</div>
            <div class="time"><span class="time-text">时间</span><span class="time-inner">${stuinfo.stage2GuideDate?stuinfo.stage2GuideDate:""}</span></div>
        </div>`
            
            $('.person-info').html(template)
            $('.first').html(first)
            $('.second').html(second)

            //第一阶段
            //教师评语
            stage1Comment.value = stuinfo.stage1Comment
            //教师评语时间
            stage1Date.value = stuinfo.stage1Date?stuinfo.stage1Date:null
            //成绩评定
            stage1Grade.value = stuinfo.stage1Grade
            //成绩评定时间
            stage1GradeDate.value = stuinfo.stage1GradeDate?stuinfo.stage1GradeDate:null

            //第二阶段
            //教师评语
            stage2Comment.value = stuinfo.stage2Comment
            //教师评语时间
            stage2Date.value = stuinfo.stage2Date?stuinfo.stage2Date:null
            //成绩评定
            stage2Grade.value = stuinfo.stage2Grade
            //成绩评定时间
            stage2GradeDate.value = stuinfo.stage2GradeDate?stuinfo.stage2GradeDate:null
            //总评
            //评价
            totalGrade.value = stuinfo.totalGrade
            //成绩
            totalScore.value = stuinfo.totalScore?stuinfo.totalScore:"优秀"

        }
    })



    $('.submit').on("click",()=>{
        let options = {
            id:stuinfo.id,
            stuNo:stuinfo.stuNo,
            stage1Comment:stage1Comment.value,
            stage1Date:stage1Date.value,
            stage1Grade:stage1Grade.value,
            stage1GradeDate:stage1GradeDate.value,
            stage2Comment:stage2Comment.value,
            stage2Date:stage2Date.value,
            stage2Grade:stage2Grade.value,
            stage2GradeDate:stage2GradeDate.value,
            totalGrade:totalGrade.value,
            totalScore:totalScore.value,
            stage1Summary:stuinfo.stage1Summary,
            stage2Summary:stuinfo.stage2Summary,
            stage2GuideDate:stuinfo.stage2GuideDate,
            stage1GuideDate:stuinfo.stage1GuideDate,
            stage2GuideWay:stuinfo.stage2GuideWay,
            stage1GuideWay:stuinfo.stage1GuideWay,
        }
        $.ajax({
            type:"POST",
            url:`${config.ip}:${config.port}/teacher/student/reportForm`,
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
            },
            data:options,
            success(data){
                alert("提交成功!")
                window.location.href = "/teacher"
            }
        })
    })
})