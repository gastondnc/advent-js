export function index() {
    function wrapGifts(gifts: string[]): string[] {
        if(gifts.length === 0) return []
        const wrap: string = '*'
        let pack: string[] = gifts.map( gift => {
            return wrap + gift + wrap
        } )
        const line: string = wrap.repeat(pack[0].length)
        pack.unshift(line)
        pack.push(line)
            return pack
    }
        
        
        




    
    wrapGifts(["📷", "⚽️"]) 
    // wrapGifts(["🏈🎸", "🎮🧸"])
    // wrapGifts(["📷"])
    // wrapGifts([])





//     wrapGifts(["📷", "⚽️"])
// /* Resultado:
/*
[ 
    '****',
    '*📷*',
    '*⚽️*',
    '****'
]
*/

// wrapGifts(["🏈🎸", "🎮🧸"])
// /* Resultado:
// [ '******',
// '*🏈🎸*',
//     '*🎮🧸*',
//     '******'
// ]
// */

// wrapGifts(["📷"])
// /* Resultado:
// [ '****',
//   '*📷*',
//   '****'
// ]
// */




}











/**
 * ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos 
han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...
 */