// number
let integer = 123
let float = 1.4
// string
let string = "Aqui temos uma String Qualquer. 1, 2, 3, 10, 11"
// boolean
let boolean = true
// undefined
let und = undefined
// null
let nu = null

// verifica os tipos das variáveis
console.log(typeof integer)
console.log(typeof float)
console.log(typeof string)
console.log(typeof boolean)
console.log(typeof und)
console.log(typeof nu)
// operações com strings, nenhuma delas altera a string original
// split, retorna um vetor que corresponde a string original separada no carácter dado
// ['Str','ng']
let separador = 'i'
console.log(`Separando a string \'${string}\' em \'${separador}\'`)
console.log(string.split(separador))
separador = 'u'
console.log(`Separando a string \'${string}\' em \'${separador}\'`)
console.log(string.split(separador))
// retorna true se a substring informada existe na string original, caso contrário retorn false
// true
let sub = 'trin'
console.log(`Existe a substring \'${sub}\' na string \'${string}\' ?`)
console.log(string.includes(sub))
// retorna uma cópia da string original onde a substring informada primeiro
// é substituida pela string informada por último
// Original: String
// Cópia Final: Slavo
let sub2 = 'lavo'
console.log(`Substituindo a subtrins \'${sub}\' por \'${sub2}\' na String \'${string}\'`)
console.log(string.replace(sub, sub2))
// retorna o caracter na posição indicada
let index = 5
console.log(`O caracter na posição ${index} da string \'${string}\'`)
console.log(string.charAt(index))
// retorna o código ASCII do caracter na posição indicada
console.log(`O código do caracter na posição ${index} da string \'${string}\'`)
console.log(string.charCodeAt(index))
// Verifica se a substring informada existe na string original
// Se sim, retorna a primeria posição da substring
// Se não, retorna -1
sub = 't'
console.log(`Se a substring \'${sub}\' existir na string \'${string}\', então retorna a primeira posição, se não -1`)
console.log(string.indexOf(sub))
// Verifica se a substring informada existe na string original
// Se sim, retorna a última posição da substring
// Se não, retorna -1
console.log(`Se a substring \'${sub}\' existir na string \'${string}\', então retorna a última posição, se não -1`)
console.log(string.lastIndexOf(sub))
// Concatena duas ou mais tring
console.log(`Concatenado a string \'${string}\'`)
console.log(string.concat('. Sem ', 'Imaginação ', 'para isso'))
// verifica se a string começa com a subtring dada, se sim retorna true se não false
console.log(`A string \'${string}\' começa com \'${sub}\' ?`)
console.log(string.startsWith(sub))
// verifica se a string termina com a subtring dada, se sim retorna true se não false
console.log(`A string \'${string}\' termina com \'${sub}\' ?`)
console.log(string.endsWith(sub))
// procura pela subtring,ou expressão regular dada na string original,
// se existir retorna o indíce do primeiro elemento, se não -1
sub = /\d+/gi
console.log(string.search(sub))
// procura pela substring, ou expressão regular, na string string original,
// retorna um array se existe pelo menos um que corresponda se não retorna null
console.log(string.match(sub))

/*alert('Mensagem!')
prompt('teste1', 'teste2')
confirm('Quere fechar msm?')
*/

let date = new Date();
console.log(date);
console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log(date.getDay()+1)
console.log(date.getDate())