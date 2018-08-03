$(document).ready( function() {
  
  function displayTime() {
    var currentTime  = new Date();
    var hours = currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();
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
    var clockDiv=document.getElementById('clock');
    clockDiv.innerText = hours + ":"+ minutes+ ":"+ seconds+ " " + meridiem;
     
  }
  
    
  displayTime();
  setInterval(displayTime, 1000);
});

 function myFunc(){
   var ct=new Date();
   var hr=ct.getHours();
   var mn=ct.getMinutes();
    var h=document.getElementById('hr').value;
    var m=document.getElementById('mn').value;
    if(h==hr && m==mn){
     document.body.style.backgroundImage = "url('https://img.quantrimang.com/photos/image/2015/10/31/Gif-anh-hon-ma-200.jpg')"; 
      document.body.style.backgroundRepeat= "no-repeat";
      document.body.style.backgroundAttachment= "fixed";
      document.body.style.backgroundSize="cover";
      var x = document.getElementById("myAudio"); 
      x.play(); 
      var y=document.getElementById("yo");
      y.innerText="WAKE UP !!!";
        }
   }

setInterval(myFunc,60000);