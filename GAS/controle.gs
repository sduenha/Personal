var planilha = SpreadsheetApp.getActiveSpreadsheet();

var cadastro = planilha.getSheetByName("Cadastro");
var auxiliar = planilha.getSheetByName("Auxiliar");

function cadastrar() {
    var data = cadastro.getRange("C3:G3").getValue();
    var tipo = cadastro.getRange("C5").getValue();
    var categoria = cadastro.getrange("F5:G5").getValue();
    var descricao = cadastro.getRange("C7:G7").getValue();
    var valor = cadastro.getRange("C9:G9").getValue();

    var ultimaLinha = auxiliar.getLastRow() + 1;

    auxiliar.getRange(ultimaLinha, 1).setValue(data);
    auxiliar.getRange(ultimaLinha, 2).setFormula('=SPLIT(A'+ ultimaLina +'; "/")');
    auxiliar.getRange(ultimaLinha, 5).setValue(tipo);
    auxiliar.getRange(ultimaLinha, 6).setValue(categoria);
    auxiliar.getRange(ultimaLinha, 7).setValue(descricao);
    auxiliar.getRange(ultimaLinha, 8).setValue(valor);

    limpar();
}

function limpar() {
    cadastro.getRange("C3:G3").clearContent();
    cadastro.getRange("C5").clearContent();
    cadastro.getrange("F5:G5").clearContent();
    cadastro.getRange("C7:G7").clearContent();
    cadastro.getRange("C9:G9").clearContent();
}