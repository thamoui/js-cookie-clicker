(function () {
 var score = 0;
 var speed = 1000;
 var btn = document.getElementById("btn");
 var btn2 = document.getElementById("btn2");
 
   onload = function () {
        btn.onclick = function () {
        score++;
        document.getElementById("display").innerHTML = score;
            }
        };  
  
   btn2.onclick = function () {
       score = score * 2;
       document.getElementById("display").innerHTML = score;
       };
  
   btn3.onclick = function () {
    // score = 0;
    alert("R U sure??");
    autoadd = function (x) {
    score = score + x;
    document.getElementById("display").innerHTML = score;
        }; 
    };    
   
var timer = setInterval(function(){autoadd(5);}, speed);
}());


