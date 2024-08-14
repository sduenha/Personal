var data = new Date();
var cand1 = document.querySelector('#candidato1');
var cand2 = document.querySelector('#candidato2');
var cand3 = document.querySelector('#candidato3');

function votar1(){
    if(cand1.style.background = 'rgb(240, 240, 240)'){
        document.querySelector('#candidato1').style.background = 'blue';
        alert(`Você votou no João ${data}`);
    }else{
        alert('Você já votou');
    };
}

function votar2(){
    if(cand2.style.background = 'rgb(240, 240, 240)'){
        document.querySelector('#candidato2').style.background = 'blue';
        alert(`Você votou no Pedro ${data}`);
    };
}

function votar3(){
    if(cand3.style.background = 'rgb(240, 240, 240)'){
        document.querySelector('#candidato3').style.background = 'blue';
        alert(`Você votou no Lucas ${data}`);
    };
}
