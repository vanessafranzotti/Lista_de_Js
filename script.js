
 let numero1 = parseInt(prompt("Digite o primeiro número:"))
let numero2 = parseInt(prompt("Digite o segundo número:"))
let diferenca = (numero1 - numero2)

for (numero1 > numero2) {
    alert (`O numero ${numero1} é maior que o ${numero2} e a diferença entre eles é ${diferenca}`)
}
    



let digiteNumero1 = parseFloat(prompt("Digite um número:"))
let digiteNumero2 = parseFloat(prompt("Digite outro número: "))

if(digiteNumero1 > digiteNumero2) {
    alert(`O ${digiteNumero1} é maior que o ${digiteNumero2}`)
 } else if (digiteNumero1 == digiteNumero2){
    alert ("Os números são iguais")
 }else
    alert(`O ${digiteNumero2} é maior que o ${digiteNumero1}`)
    


let salario = parseInt(prompt("Digite o valor do seu salario:"))
let prestacaoEmprestimo = parseInt(prompt("Digite o valor da prestação do emprestimo:"))
let calculoEmprestimo = (salario * prestacaoEmprestimo) /100

if(calculoEmprestimo < salario){
    alert("Emprestimo aprovado")

}else 
alert ("Emprestimo reprovado")



let numeroDivisivel = parseInt(prompt("Digite um numero: "))
    
if((numeroDivisivel % 3) == 0){
alert("O número é divisivel por 3")
} else if ((numeroDivisivel % 5) == 0){
    alert("O número é divisivel por 5")
} else 
alert ("Numero é par")


let number= parseInt(prompt("Digite um número:"))

if(number ==1){
    alert("Segunda-feira")
}else if(number ==2){
    alert("Terça-Feira")
}else if(number ==3){
    alert ("Quarta-feira")
}else if(number ==4){
    alert("Quinta-feira")
}else if(number ==5){
    alert("Sexta-Feira")
}else if(number ==6){
    alert("Sábado")
}else if(number == 7){
    alert("Domingo")
}else
("Erro")

let valorSalario= parseInt(prompt("Digite o valor do salário:"))
let valorReajuste= parseFloat(prompt("Digite o valor do reajuste:"))
let salarioReajustado = (valorSalario * valorReajuste) /100
let novoSalario = valorSalario + salarioReajustado

alert(`O valor do funcionário corrigido é de R$ ${novoSalario}`)

let valorDolar = parseFloat(prompt("Digite o valor em dólar $:"))
let converterReal= valorDolar * 5.25;
alert(`O valor $ ${valorDolar} é equivalente a R$ ${converterReal} tendo como 5.25 como cotação`)



/*let ervasDaninhas = "Tipo 1"
let gafanhotos = "Tipo 2"
let broca = "Tipo 3"
let todosAcima = "Tipo 4"

let tipoDePulverizacao = prompt("Digite o tipo de pulverização: ")
let qtdDeAcres = prompt("Digite a área a ser pulverizada: ")

//let valorDaPulverizacao = (qtdDeAcres * "Tipo 1" || "Tipo 2" || "Tipo 3" || "Tipo 4")//

//alert("O valor a ser pago é ") */




let tempo = prompt("Digite o tempo gasto: ")
let velocidade = prompt("Digite a velocidade durante a viagem: ")
let distancia = tempo * velocidade
let litrosUsados = distancia /12
alert(`Seu veículo percorreu ${distancia} km a ${velocidade} km/h e em ${tempo} horas, e consumiu ${litrosUsados} L de gasolina`)



let valor1= parseInt(prompt("Digite o valor da prestação: "))
let taxa = parseFloat(prompt("Digite a taxa cobrada por atraso: "))
let tempoAtraso = parseInt(prompt("Digite o tempo de atraso da prestação: "))

let prestacaoCorrigida = (valor1 * taxa /100)* tempoAtraso
let prestacaoAtualizada = prestacaoCorrigida + valor1
if(tempoAtraso > 1){
alert(`O valor da prestação corrigido é de R$ ${prestacaoAtualizada}`)
} else
alert ("Valor inválido, o tempo de atraso deve ser em dias")










