var display = document.querySelector('.display')
var numberOne = ''
var numberTwo = ''
var operation = ''

function action(choise){
    if(operation.valueOf(operation) == ""){
        numberOne += choise
        display.innerHTML = numberOne
    }else{
        numberTwo += choise
        display.innerHTML = numberOne + operation + numberTwo
    }
}

function action0(){
    action(0)
}

function action1(){
    action(1)
}

function action2(){
    action(2)
}

function action3(){
    action(3)
}

function action4(){
    action(4)
}

function action5(){
    action(5)
}

function action6(){
    action(6)
}

function action7(){
    action(7)
}

function action8(){
    action(8)
}

function action9(){
    action(9)
}

function actionPlus(){
    operation = '+'
    var plus = '<span>+</span>' 
    display.innerHTML += plus
}

function actionMinus(){
    var minus = '<span>-</span>'
    display.innerHTML += minus
}

function actionDivision(){
    var division = '<span>/</span>'
    display.innerHTML += division
}

function actionMultiply(){
    var multiply = '<span>*</span>'
    display.innerHTML += multiply
}

function actionResult(){
    result = numberOne + operation + numberTwo
    display.innerHTML = result
    console.log(result)
}