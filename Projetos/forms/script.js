const formsName = document.querySelector('.forms-name');
const formsSubmit = document.querySelector('.forms-submit');
const boxName = document.querySelector('.box')
let alunosTotal = [];
let aluno = '';

formsSubmit.addEventListener('click', function(e){
  e.preventDefault();
  alunosTotal.push(formsName.value);
  aluno = formsName.value;
  formsName.value = '';
  novaDiv = document.createElement("div");
  novaDiv.classList.add('nomeAluno');
  boxName.appendChild(novaDiv);
  novaDiv.innerHTML = aluno;
});
