function go(){
    f1.submit();
    document.getElementById("pro").style.display="block";
    document.getElementById("prop").style.display="";
    timer=setInterval("getP()",50);

}

var xmlHttpRequest;
function getP(){

    if(window.XmlHttpRequest){
        xmlHttpRequest=new XMLHttpRequest();
    }else{xmlHttpRequest=new XMLHttpRequest();
        //xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }/**/

    xmlHttpRequest.onreadystatechange=callBack;
    url="getProgressServlet";
    xmlHttpRequest.open("post",url,true);

    xmlHttpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttpRequest.send("&timeStamp="+(new Date()).getTime());
}
//�ص�����
function callBack(){
    if(xmlHttpRequest.readyState==4 && xmlHttpRequest.status==200){

        result=xmlHttpRequest.responseText;
        var result=result.replace(/(^\s*)|(\s*$)/g, "");
        var res=result.split(",");
        var flag=res[1];
        var per=parseInt(res[0]);
        var err=res[2];
        document.getElementById("imgpro").style.width=per*5+"px";
        document.getElementById("prop").innerHTML=per+"%";
        if(flag=="OK"){
            window.clearInterval(timer);
            alert("�ϴ��ɹ���");
            document.getElementById("pro").style.display="none";
            document.getElementById("prop").innerHTML="";
            f1.reset();
        }
        if(err!=""||err.length>0){
            window.clearInterval(timer);
            alert(err);
        }
        if(flag==null){
            window.clearInterval(timer);
        }
    }
}