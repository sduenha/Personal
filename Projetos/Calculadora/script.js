var display = document.querySelector('.display')
var buttons = document.querySelector('.buttons')
var register = document.querySelector('.register')
var register2 = document.querySelector('.registerbtn2')
var clean = document.querySelector('.cleanbtn')
var numberOne = ''
var numberTwo = ''
var operation = ''
var numberRegister = ''
var newNumberOne = ''
var numberOneToString = ''
var newNumberTwo = ''
var numberTwoToString = ''

function action(choise){
    if(operation.valueOf(operation) == ""){
        if(numberOne.length < 8){
            numberOne += choise
            display.innerHTML = numberOne
        }
    }else{
        if(numberTwo.length < 8){
            numberTwo += choise
            display.innerHTML = `${numberOne} ${operation} ${numberTwo}`
        }
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
    return atualizarDisplay();
}

function actionMinus(){
    operation = '-'
    return atualizarDisplay();
}

function actionDivision(){
    operation = '/'
    return atualizarDisplay();
}

function actionMultiply(){
    operation = '*'
    return atualizarDisplay();
}

function actionResult(){
    if(operation == '+'){
        result = parseInt(numberOne) + parseInt(numberTwo)
    }if(operation == '-'){
        result = parseInt(numberOne) - parseInt(numberTwo)
    }if(operation == '/'){
        result = parseInt(numberOne) / parseInt(numberTwo)
    }if(operation == '*'){
        result = parseInt(numberOne) * parseInt(numberTwo)
    }
    if(result.toString().length < 8){
        numberRegister = `${numberOne} ${operation} ${numberTwo} = ${result}`
        display.innerHTML = result
        var registerOption = document.createElement('span')
        registerOption.innerHTML = numberRegister
        register.appendChild(registerOption)
        numberOne = result
        numberTwo = ''
        result = ''
        operation = ''
    }else if(result.toString().length > 8){
        display.innerHTML = 'ERR'
        numberOne = ''
        operation = ''
        numberTwo = ''
        result = ''
    }


}

function actionRegister(){
    if(register.style.display == '' || register.style.display == 'none'){
        register2.style.display = 'flex'
        display.style.display = 'none'
        buttons.style.display = 'none'
        register.style.display = 'grid'
        

    }else if(register.style.display == 'grid'){
        register2.style.display = 'none'
        display.style.display = 'flex'
        buttons.style.display = 'flex'
        register.style.display = 'none'
    }   
}

function actionClear(){
    display.innerHTML = ''
    numberOne = ''
    numberTwo = ''
    result = ''
}

function actionDelete(){
    if(numberTwo == '' && operation == ''){
        numberOneToString = numberOne.toString()
        newNumberOne = numberOneToString.split('')
        newNumberOne.pop()
        newNumberOne = newNumberOne.join('')
        numberOne = newNumberOne
        return atualizarDisplay();

    }else if(numberTwo == '' && operation != ''){
        operation = ''
        return atualizarDisplay();

    }else if(operation != '' && numberTwo != ''){
        numberTwoToString = numberTwo.toString()
        newNumberTwo = numberTwoToString.split('')
        newNumberTwo.pop()
        newNumberTwo = newNumberTwo.join('')
        numberTwo = newNumberTwo
        return atualizarDisplay();

    }
}

function atualizarDisplay(){
    display.innerHTML = `${numberOne} ${operation} ${numberTwo}`
}
