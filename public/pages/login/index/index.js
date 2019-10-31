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
                window.location.href = "../../student/details/details.html";
                break;
            case 2:
                window.location.href = "../../teacher/report-stuList/studentlist.html";
                break;
            case 3:
                window.location.href = "../../corp-teacher/studentlist.html";
                break;
            case 4:
                window.location.href = "../../corp/studentlist.html";
                break; 
            case 5:
                window.location.href = "../../college-principal/studentlist.html";
                break;      
            default:
                this.alert("请选择身份")
        }

    }
    

}