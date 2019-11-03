$(()=>{
    $.ajax({
        type:"GET",
        url:`${config.ip}:${config.port}/teacher/students`,
        dataType:"json",
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", localStorage.getItem("userinfo"));
        },
        success(data){
            console.log(data)
        }
    })
})