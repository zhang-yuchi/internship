window.onload = function(){
    document.onselectstart = function(){return false}
    let radio = document.getElementsByName("identity")
    let useridentity = 0;
    document.getElementsByClassName("land-btn")[0].onclick =()=>{
        for(let item of radio){
            if(item.checked){
                useridentity = parseInt(item.value)
            }
            
        }
        switch (useridentity){
            case 1:
                window.location.href = "/student";
                break;
            case 2:
                window.location.href = "/teacher";
                break;
            default:
                this.alert("请选择身份")
        }

    }
    

}