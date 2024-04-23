export function index() {
    function adjustLights(lights: string[]) {
        let lightsArr: string[] = lights;
        // let changeA: number = 0;
        // let changeB: number = 0;
        let result: number = 0;
        console.log('LightsArr',lightsArr);
        // console.log('ChangeA',changeA);
        // console.log('ChangeB',changeB);
        lightsArr.forEach( (light, index) => {
            if(index % 2 === 0){
                lightsArr[index] = '🟢'
            }else{
                lightsArr[index] = '🔴'
            }
        })
        
        console.log('verdes',lightsArr)
        
        lightsArr = lightsArr.map( (light, index) => index % 2 === 0 ?  '🔴' :  '🟢');
        console.log('rojos',lightsArr)



        return result
    }

    const result = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
    console.log(result)
}


/**
 * adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
    // -> 1 (cambias la cuarta luz a 🔴)

    adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
    // -> 1 (cambia la primera luz a verde)

    adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
    // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

    adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
    // -> 0 (ya están alternadas)

    adjustLights(['🔴', '🔴', '🔴'])
    // -> 1 (cambias la segunda luz a 🟢)
 */










/**
 * Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

    Las luces son de dos colores: 🔴 y 🟢 . 
    Para que el efecto sea el adecuado, siempre deben estar alternadas. 
    Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

    Nos han pedido que escribamos una función adjustLights que,
    dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), 
    devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
 */