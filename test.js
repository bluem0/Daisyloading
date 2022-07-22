let f=document.getElementsByClassName("flower")[0];
var s="",sum=9;
for(var i=0;i<sum;i+=1){
    s+='<div class="petal none"></div><br>';
}
s+='<div class="flowerCore"></div>';
s+='<div class="loadText"></div>'
f.innerHTML=s;

let petal=document.getElementsByClassName("petal"),
    loadText=document.getElementsByClassName("loadText")[0],loadInt=0,petalNum=0;
for(var i=0;i<sum;i+=1){
    petal[i].style.transform='translate(10px,10px) rotate('+(i*360/sum)+'deg)';
}
setInterval(function(){
    loadText.innerHTML=loadInt+"%";
    while(loadInt/100>=(petalNum+1)/sum){
        petal[petalNum].className="petal";
        petalNum+=1;
    }
},100);







var loadTimer,ifCountDown=false;
function load(){
    for(var i=0;i<sum;i+=1){
        petal[i].className="petal none";
    }
    loadInt=0;
    petalNum=0;
    if (!ifCountDown){
        loadInt=0;
        ifCountDown=true;
        loadTimer=setInterval(function(){
            loadInt+=1;
            if(loadInt>=100){
                ifCountDown=false;
                clearInterval(loadTimer);
            }
        },80);
    }
}
