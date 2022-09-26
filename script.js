'use strict';

function calcDays(){

    let amontSmoke = document.getElementById('calc-days').value;
    let amontAge = document.getElementById('calc-age').value;

    let daySmoking, totalMin, totalDaysLost = Number;

    if(amontAge && amontSmoke >= 0){
        daySmoking = amontAge * 365;
        totalMin = amontSmoke * 10;

        totalDaysLost = (((daySmoking * totalMin) / 60) /24);

        document.getElementById('result').innerHTML = (Math.round(totalDaysLost)) + " dias";  

    }else{
        window.alert("Digite um valor maior que 0 para calcular!")
    }
    
} 
