/********************************
* Operações Básicas e Precedência de Operadores
*/

//Declaração das variáveis
var ano_atual, ano_ana, ano_maria, idade_ana, idade_maria

//Atribuição dos valores das variáveis
idade_ana = 17
idade_maria = 31
ano_atual = 2019
ano_ana = ano_atual - idade_ana
ano_maria = ano_atual - idade_maria

//Operadores matemáticos
console.log("Ana nasceu em " + ano_ana )
console.log("Maria nasceu em " + ano_maria)

//O javascript interpreta nasc_ana e nasc_maria como string, e concatena ("1731")
console.log("A soma das idades de Ana e Maria é: " + idade_ana + idade_maria + " anos.")

//Os parênteses circundando nasc_ana + nasc_maria forçam o Javascript primeiro 
//a fazer o cálculo da soma, só depois concatenar na string.
console.log("A soma das idades de Ana e Maria é: " + (idade_ana + idade_maria) + " anos.")

//Veja que no caso da multiplicação, não houve necessidade dos parênteses, por causa da 
//precedência do operador da multiplicação
console.log("A multiplicação das idades de Ana e Maria é: " + idade_ana * idade_maria + " anos.")

//Veja que no caso da divisão, também não houve necessidade dos parênteses, por causa da 
//precedência do operador da divisão
console.log("A divisão entre as idades de Maria e Ana é: " + idade_maria / idade_ana)

//Resto da divisão
console.log("O resto da divisão entre as idades de Maria e Ana é: " + idade_maria % idade_ana)

//Divisão inteira
console.log("A divisão inteira entre as idades de Maria e Ana é: " + parseInt(idade_maria / idade_ana))

//Outra forma de divisão inteira
console.log("Essa é outra forma para divisão inteira (idade_maria / idade_ana)|0: " + ((idade_maria / idade_ana)|0))

//--------------------
//Operadores lógicos

//Ana é mais velha do que Maria?
console.log("Ana é mais velha do que Maria: " + (idade_ana > idade_maria))


//--------------------
//Operador Typeof

var logic = false
var str = "Uma string qualquer."
console.log("A variável logic é do tipo " + typeof(logic))
console.log("A variável idade_ana é do tipo " + typeof(idade_ana))
console.log("A variável str é do tipo " + typeof(str))

var a
console.log("A variável a é do tipo " + typeof(a))


//----------------------
//Precedência de operadores

var maior_idade = 18

//Multiplos operadores
ana_eh_maior_idade = ano_atual - ano_ana >= maior_idade //false

//Veja que funcionou, por causa da precedência do menos em relação ao maior igual.
console.log("Ana é maior de idade? " + ana_eh_maior_idade)

//Média da idade de Ana e Maria. Veja que o resultado não será correto
//por causa da precedência do / em releção ao +
var media = idade_maria + idade_ana / 2
console.log("Por causa da precedência do / o resultado ficou errado: " + media)

// //Agrupando operadores

//Os parênteses forçam a fazer primeiro a soma, só depois a divisão
media = (idade_maria + idade_ana) / 2
console.log("Agora a média está correta: " + media)

//Multipas atribuições
var x = y = (2 + 3) * 4 - 6 // 5 * 4 - 6 // 20 - 6 // 14
console.log(x, y)


//Mais operadores
x *= 2 // é a mesma coisa que x = x * 2
console.log("O dobro de x é: " + x )

x += 10 // é a mesma coisa que x = x + 10
console.log("O dobro de x somados a 10 é: " + x )

//Operador de incremento
x++ //é a mesma coisa que x = x + 1, ou x += 1.
console.log("x foi incrementado em uma unidade: " + x )

//Operador de decremento
y-- //é a mesma coisa que y = y - 1, ou y -= 1.
console.log("y foi decrementado em uma unidade: " + y )



