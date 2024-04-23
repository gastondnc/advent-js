export function index() {
    function decodeNumber(symbols: string) {
        let result: number = 0
        let numbers: number[] = []
        const ref = [
            {
                char: '.',
                value: 1
            },
            {
                char: ',',
                value: 5
            },
            {
                char: ':',
                value: 10
            },
            {
                char: ';',
                value: 50
            },
            {
                char: '!',
                value: 100
            }
        ]

        symbols.split('').forEach(character => {
            console.log(character);
            const element =  ref.find( el  => {
                return el.char === character
            })
                numbers.push(element?.value ?? NaN)
                console.log(numbers)
                console.log(element)
        });
            numbers = numbers.map( (item, index) => {
                if(numbers[index+1] > item) {
                    return item * -1
                }
                return item
            })
            numbers.forEach(element => {
                result = result + element 
            });
            console.log(numbers)
            
            return result
        }
    
        const result = decodeNumber('...!');
        console.log(result);

}



/**
 * Símbolo       Valor
    .             1
    ,             5
    :             10
    ;             50
    !             100
 */

/**
 * devolvamos un NaN:

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
 */


/**
 * Lara Eloft ha encontrado unos restos élficos en una cueva, 
 * cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos 
números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:
 */



