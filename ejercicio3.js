'use strict'

var numero1 = parseInt(prompt('Introduce el primer numero'))
var numero2 = parseInt(prompt('Introduce el segundo numero'))

if (numero1<numero2){
    while(numero1!=numero2){
        numero1++
        alert(numero1)
    }
}else if (numero2<numero1){
    while(numero2!=numero1){
        numero2++
        alert(numero2)
    }
}
