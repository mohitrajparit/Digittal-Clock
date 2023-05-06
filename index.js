let dy_arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function showTime(){
    let a=new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds();
    let session=" AM";
    if(h>=12) session=" PM";
    
    if(h==0) h=12;

    if(h>12) h=h-12;    
    
    if(h<10 ) h="0"+h;

    if(m<10) m="0"+m;
    
    if(s<10)s="0"+s;
    
    let tm=h+":"+m+":"+s+session;
    document.getElementById("time").innerHTML=tm;
    document.getElementById("time").textContent=tm;
    setTimeout(showTime,100);
}
function showDate(){
    let a=new Date();
    let d=a.getDate();
    let mn=a.getMonth();
    mn=mn+1;
    let y=a.getFullYear();
    let dt=d+"/"+mn+"/"+y;
    document.getElementById("date").innerHTML=dt;
    document.getElementById("date").textContent=dt;
    setTimeout(showDate,1000);
}
function showDay(){
    let a=new Date();
    let day=a.getDay();
    let dy=dy_arr[day];
    document.getElementById("day").innerHTML=dy;
    document.getElementById("day").textContent=dy;
    setTimeout(showDay,1000);
}

showTime();
showDate();
showDay();
let mt=true;
if(document.body.classList.contains("theme2")){
    document.getElementById("btn").innerHTML="light";
}
else{
    document.getElementById("btn").innerHTML="Dark"
}
function themeChange(){

    document.body.classList.toggle("theme2");
    if(mt){
        document.getElementById("btn").innerHTML="Dark";
        mt=!mt;
    }
    else{
        document.getElementById("btn").innerHTML="light";
        mt=!mt;
    }
    
}