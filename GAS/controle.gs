var planilha = SpreadsheetApp.getActiveSpreadsheet();

var cadastro = planilha.getSheetByName("Cadastro");
var auxiliar = planilha.getSheetByName("Auxiliar");

function cadastrar() {
    var data = cadastro.getRange("C3:G3").getValue();
    var tipo = cadastro.getRange("C5").getValue();
    var descricao = cadastro.getRange("C7:G7").getValue();
    var valor = cadastro.getRange("C9:G9").getValue();

    var ultimalinha = auxiliar.getLastRow() + 1;

    
}