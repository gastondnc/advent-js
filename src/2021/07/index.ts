export function index() {
    const letter: string = "(muñeca) consola (bici)" ;
    function isValid(letter: string) {
        console.log(letter)
        const start: number = letter.indexOf('(')
        const end: number = letter.lastIndexOf(')')
        const gift: string = letter.substring(start + 1, end )
        console.log(gift)
        let isOk: boolean = false
        console.log(start)
        console.log(end)
        console.log(gift)

        if( gift !== '' && gift.indexOf('{') === -1 && gift.indexOf('[') === -1 && end !== -1 && gift.indexOf('(') === -1 ){
            isOk = true
        }
        
        return isOk
    }



    const result = isValid(letter)
    console.log(result)
    
} 


/**
 * Ejemplos:
 * "bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅
"(muñeca) consola (bici)" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
"(()) bici" // -> ❌
 */
/**
 * El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

    Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

    Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente 
    y que, además, no vayan vacíos.

    ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. 
    Por suerte sólo los ha dejado en medio de los paréntesis...
 */
/**
 * Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. 
 * ¡Y acaba con la travesura del Grinch!
 */



