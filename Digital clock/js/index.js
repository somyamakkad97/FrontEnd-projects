$(document).ready( function() {
  
  function displayTime() {
    var currentTime  = new Date();
    var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var month=["jan","feb","march","apr","May","june","july","aug","sep","oct","nov","dec"];
    var hours = currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();
    var d=currentTime.getDay();
    var day=days[d];
    var t=currentTime.getDate();
    var y=currentTime.getFullYear();
    var f=currentTime.getMonth();
    var u=month[f];
    var meridiem="AM";
    if(seconds<10){
       seconds="0"+seconds;
     }
    if(minutes<10){
      minutes="0"+minutes;
    }
    if(hours<10){
      hours="0"+hours;
    } 
    if(hours>=12){
      meridiem="PM";
      hours=hours-12;
    }
    var mDiv=document.getElementById('date');
    mDiv.innerText=t+" "+u+" "+y; 
    var dayDiv=document.getElementById('day');
    dayDiv.innerText=day;
    var clockDiv=document.getElementById('clock');
    clockDiv.innerText = hours + ":"+ minutes+ ":"+ seconds+ " " + meridiem;
     
  }
  
  displayTime();
  setInterval(displayTime, 1000);
});