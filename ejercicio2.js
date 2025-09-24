'use strict'
var media = 0
var c = 0
while(true){
    var numero = parseInt(prompt('Introduce un numero'))
    if (numero>=0){
        c++
        media+=numero
        alert(media/c)
    }else if (numero<0){
        break
    }
}