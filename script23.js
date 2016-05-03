
(function () {
 var score = 0;
   var btn = document.getElementById("btn");
   var btn2 = document.getElementById("btn2");
   onload = function () {
      btn.onclick = function () {
             score = score + 1;
       document.getElementById("display").innerHTML = score;
         
   };  
   };
   
   btn2.onclick = function () {
       score = score * 2;
       document.getElementById("display").innerHTML = score;
   };
   
 

}());
