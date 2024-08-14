$(function(){
    
    // SelecionarCandidato()

    // function SelecionarCandidato(){

    // }


    var amtcandidato = $('.botao').length
    var curIndex = -1
    var nomeCandidato = ''
    var info = $('.informacoes').length

    var d = new Date();

    var month = d.getMonth()+1;
    
    // if(month == 1){
    //     month = 'Janeiro'
    // }else if(month == 2){
    //     month = 'Fevereiro'
    // }else if(month == 3){
    //     month = 'Março'
    // }else if(month == 4){
    //     month = 'Abril'
    // }else if(month == 5){
    //     month = 'Maio'
    // }else if(month == 6){
    //     month = 'Junho'
    // }else if(month == 7){
    //     month = 'Julho'
    // }else if(month == 8){
    //     month = 'Agosto'
    // }else if(month == 9){
    //     month = 'Setembro'
    // }else if(month == 10){
    //     month = 'Outubro'
    // }else if(month == 11){
    //     month = 'Novembro'
    // }else if(month == 12){
    //     month = 'Dezembro'
    // }
    
    switch (month){
        case 1:
            month = 'Janeiro'
            break
        case 2:
            month = 'Fevereiro'
            break
        case 3:
            month = 'Março'
            break
        case 4:
            month = 'Abril'
            break
        case 5:
            month = 'Maio'
            break
        case 6:
            month = 'Junho'
            break
        case 7:
            month = 'Julho'
            break
        case 8:
            month = 'Agosto'
            break
        case 9:
            month = 'Setembro'
            break
        case 10:
            month = 'Outubro'
            break
        case 11:
            month = 'Novembro'
            break
        case 12:
            month = 'Dezembro'
            break
    }

    var day = d.getDate();
    var year = d.getFullYear()
    var hour = d.getHours()
    var minutes = d.getMinutes()
    if(minutes < 10){
        minutes = '0' + minutes
    }
    var seconds = d.getSeconds()
    var horario = hour + ':' + minutes + ':' + seconds
    var output = (day<10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + d.getFullYear()

    zerarCurIndex();

    function zerarCurIndex(){
        if(curIndex >= amtcandidato){
            curIndex = -1
        }
    }

    $('.botao').eq(0).click(function(){
        curIndex = 0
        $('.informacoes').eq(1).css('background-color','white').css('border','none')
        $('.informacoes').eq(2).css('background-color','white').css('border','none')
        $('.informacoes').eq(curIndex).css('background-color','#cccccc').css('border','1px solid black')
        nomeCandidato = 'candidato 1'
    });

    $('.botao').eq(1).click(function(){
        curIndex = 1
        $('.informacoes').eq(0).css('background-color','white').css('border','none')
        $('.informacoes').eq(2).css('background-color','white').css('border','none')
        $('.informacoes').eq(curIndex).css('background-color','#cccccc').css('border','1px solid black')
        nomeCandidato = 'candidato 2'
    });

    $('.botao').eq(2).click(function(){
        curIndex = 2
        $('.informacoes').eq(0).css('background-color','white').css('border','none')
        $('.informacoes').eq(1).css('background-color','white').css('border','none')
        $('.informacoes').eq(curIndex).css('background-color','#cccccc').css('border','1px solid black')
        nomeCandidato = 'candidato 3'
    });

    $('.confirmar').click(function(){
        if(curIndex == -1){
            alert('ERRO! NENHUM CANDIDATO SELECIONADO!')
        }else{
            alert('Você votou no dia ' + day + ' do ' + month + ' de ' + year + ' às ' + horario + ' no ' + nomeCandidato +'!')
            $('.informacoes').eq(curIndex).css('background-color','white').css('border','none')
            curIndex = -1

        }
        
    });  

})