export function index(){
    function listGifts(letter: string) {
        let gifts:any = {};

        const words: string[] = letter.split(' ');
        console.log(words)
        const filteredWords: string[] = words.filter(word => {

            return !word.startsWith('_')
        })
        console.log(filteredWords)
        
        filteredWords.forEach( el  => {
            gifts[el] = gifts[el] === undefined ? 1 : gifts[el] + 1
        })

        return gifts
    }

    const letter: string = 'bici coche balón _playstation bici coche peluche';
    const gifts: any = listGifts(letter);

    console.log(gifts);    
}
        
/***
 * {
        bici: 2,
        coche: 2,
        balón: 1,
        peluche: 1
    }
 */

/**
 * Te ha llegado una carta ✉️ con todos los regalos que debes preparar. 
 * El tema es que es una cadena de texto y es muy difícil de leer 😱. 
 * ¡Menos mal que han puesto cada regalo separado por espacio! 
 * (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

* Encima nos hemos dado cuenta que algunas palabras vienen con un
* _ delante de la palabra, por ejemplo _playstation, 
* que significa que está tachado y no se tiene que contar.

* Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. 
* Por ejemplo, si tenemos el texto:
* Reusltado:
/*
    
*/


