/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
(function (){
   var score = 0;
    var btn = document.getElementById("btn");
    btn.onclick = function () {
        score = score + 1;
        document.getElementById("display").innerHTML = score;
    };
}());
