function jindividual(max){
    var jogo_principal = [];
    qnum = document.getElementById("qnum").value;
    
    for(j=0;j<qnum;j++){
        var atual = Math.floor(Math.random()*max+1);
        for(i=0;i<jogo_principal.length;i++){
        
            if(atual===jogo_principal[i]){atual = Math.floor(Math.random()*max+1);i=-1;
            }
        }
    jogo_principal[i]=atual;
    }
    jogo_principal= jogo_principal.sort(function(a, b){return a-b});
 
        var ext = document.createElement("DIV");
        ext.setAttribute("style", "background-color:none; margin:10px; width:100%;float:left;");

        for(i=0;i<qnum;i++){
            var x = document.createElement("DIV");
            var p = document.createElement("DIV");
            var t = document.createTextNode(jogo_principal[i]);

        x.setAttribute("style", "text-align:center;background-color: #4e71d1;height:50px;width:50px;border-radius:50%;float:left;margin:10px;");
        p.setAttribute("style", "background-color: #4e71d1;height:15px;width:15px;float:center;position:relative;top:12px;left:18px;vertical-align:+15px;");

        ext.appendChild(x);
        x.appendChild(p);
        p.appendChild(t);
        document.getElementById("ext").appendChild(ext);}

    }
function megaSena(){
 
        document.getElementById("ext").innerHTML="";
        qjog = document.getElementById("qjog").value;
        for(n=1;n<=qjog;n++){jindividual(60);}
}   
function resetar(){
        document.getElementById("ext").innerHTML="";
        document.getElementById("qjog").value="0";
        document.getElementById("qnum").value="6";
}
    