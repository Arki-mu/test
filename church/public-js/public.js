window.onload=function(){
    var head_top = document.getElementById("head-top");
    var a_head_top = head_top.getElementsByTagName("a");
    for(var i = 0;i<8;i++){
        a_head_top[i].onclick=function(){
            for(var a=0;a<8;a++){
                a_head_top[a].className = ""
            }
            this.className="active"
        }
    }
}
    
