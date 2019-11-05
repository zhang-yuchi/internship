$(()=>{
    $.ajax({
        type:"GET",
        url:`${config.ip}:${config.port}/teacher/students`,
        dataType:"json",
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", sessionStorage.getItem("userinfo"));
        },
        success(data){
            let students = data.data
            let template = ``
            for(let item of students){
                let std = `<tr class="stuList-row">
                <td>
                    ${item.stuNo}
                </td>
                <td>
                    ${item.name}
                </td>
                <td>
                    ${item.college}
                </td>
                <td>
                    ${item.major}
                </td>
                <td>
                    <div class="line-row">
                        Q Q: ${item.qq}
                    </div>
                    <div class="line-row">
                        TEL: ${item.phone}
                    </div>
                </td>
                <td class=${item.identifyFlag?"checked":"unchecked"}>
                    
                <span class="iconfont ${item.identifyFlag?"icon-dui3":"icon-cuo2"}"></span>${item.identifyFlag?"已完全评价":"未完全评价"}
            </td>
                <td class="align-center">
                    <button class="check check-decision" data-id="${item.stuNo}">评价</button>
                </td>
            </tr>`
            template+=std
            }
            $('tbody').html(template)
        },
        error(err){
            alert("服务器繁忙,请重试")
        }
    })
})