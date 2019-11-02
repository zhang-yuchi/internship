;(function(){
    function redirectTo(ele,url){
        ele.onclick = ()=>{
            window.location.href = url
        }
        
    };
    function requireByGet(url,resolve,reject){
        fetch(url,{
            method:'GET'
        }).then((res)=>{
            res.json(()=>{

            }).then(()=>{
                resolve(res)
            }).catch(()=>{
                reject(err)
            })
        }).catch(()=>{
            console.log("路由输入错误")
        })
    }
    function requireByPost(){

    }
    function saveLocalStorage(str,obj){
        if(typeof obj === "object"){
            obj = JSON.stringify(obj)
        }
        localStorage.setItem(str,obj)
    }
    function getLocalStorage(str){
        objstr = localStorage.getItem(str)
        try {
            return objstr = JSON.parse(objstr)
        } catch (error) {
            return localStorage.getItem(str)
        }
            
            
    }
    //--------------------------------
    window.redirectTo = redirectTo
    window.requireByGet = requireByGet
    window.requireByPost = requireByPost
    window.saveLocalStorage = saveLocalStorage
    window.getLocalStorage = getLocalStorage

})()