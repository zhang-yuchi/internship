window.onload = function(){
    document.onselectstart = function(){return false}
    let radio = document.getElementsByName("identity")
    let useridentity = null;
    
    document.getElementsByClassName("land-btn")[0].onclick =()=>{
        for(let item of radio){
            if(item.checked){
                useridentity = item.value
            }}

            let useraccount = "2019209007"
            let password = "admin"
            let loginType = "Student"

       $.ajax({
           type:"POST",
           url:`${config.ip}:${config.port}/user/login`,
           data:{
                account:useraccount,
                password:password,
                loginType:loginType
           },
           dataType:"json",
           success:function(data){
                // 请求成功时
                console.log(data)
                if(data.status === 1){
                    localStorage.setItem("userinfo",data.data.Authorization)
                    if(useridentity==="Student"){
                        window.location.href = "/student"
                    }else if(useridentity==="Teacher"){
                        window.location.href = "/teacher"
                    }
                    
                }else{
                    alert(data.message)
                }
           },
           error:function(err){
               alert('服务器繁忙,请重试!')
           }
       })
        

        
            
        
        // switch (useridentity){
        //     case 1:
        //         window.location.href = "/student";
        //         break;
        //     case 2:
        //         window.location.href = "/teacher";
        //         break;
        //     default:
        //         this.alert("请选择身份")
        // }

    }
    

}