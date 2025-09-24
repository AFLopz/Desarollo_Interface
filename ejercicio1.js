'use strict'
/**
 * Vamos a crear un programa que nos pida dos números.
 */

//pedir numeros


//logica
while(true){
    var numero1 = parseInt(prompt('Introduce el primer numero'))
    var numero2 = parseInt(prompt('Introduce el segundo numero'))

    console.log(numero1,numero2)
    if (numero1>0 && numero2>0){
        if (numero1 === numero2){
            alert ('los numeros son iguales')
            break
        }else if (numero1 > numero2){
            alert('el numero mayor es: ' + numero1)
            alert('el numero menor es: ' + numero2)
            break
        }else if (numero < numero2){
            alert('el numero mayor es: ' + numero2)
            alert('el numero menor es: ' + numero1)
            break
        }
    }
    alert('introduce los numeros correctos')
    
}
