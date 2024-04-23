export function index() {
    const ovejas: {name:string, color:string}[] = [
        { name: 'Noa', color: 'azul' },
        { name: 'Euge', color: 'rojo' },
        { name: 'Navidad', color: 'rojo' },
        { name: 'Ki Na Ma', color: 'rojo'},
        { name: 'AAAAAaaaaa', color: 'rojo' },
        { name: 'Nnnnnnnn', color: 'rojo'}
    ];

    // Filtar por color //
    /**
     * Considera una lista/array de ovejas. 
     * Cada oveja tiene un nombre y un color. 
     * Haz una función que devuelva una lista con 
     * todas las ovejas que sean de color rojo y que además 
     * su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
     */

    
    function contarOvejas(ovejas: any[]):any[] {
        const filtered: any[] = ovejas.filter( oveja => {
            if(oveja.color === 'rojo' && oveja.name.toLowerCase().indexOf('n') !== -1 && oveja.name.toLowerCase().indexOf('a') !== -1  ){

                return oveja;
            }
        } )
        
        return filtered
    }

    const result = contarOvejas(ovejas)

    console.log(result)




}