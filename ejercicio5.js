'use strict'

var numero1 = parseInt(prompt('Introduce el primer numero'))
var numero2 = parseInt(prompt('Introduce el segundo numero'))
var numero3 = parseInt(prompt('Introduce el numero divisor'))

if (numero1<numero2){
    while(numero1!=numero2-1){
        numero1++
        if(numero1 % 2 === 0){
            alert(numero1)
        }
        
    }
}else if (numero2<numero1){
    while(numero2!=numero1-1){
        numero2++
        if(numero2 % numero3 === 0){
            alert(numero2)
        }
        
    }
}