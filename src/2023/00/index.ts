export function index() {
    const ingredientes: string[] = [ 'lechuga', 'tomate', 'cebolla', 'queso' ];
    const aderezos: string[] = [ 'sal', 'pimienta', 'aceite', 'vinagre' ];
    const cantidad: number = 5

    function hacerEnsalada() {
        console.log('hacer Ensalada')
        prepararIngredientes(ingredientes)
        prepararAderezos(aderezos)
        mezclar(cantidad)
        comerEnsalada()

    }

    function prepararIngredientes(ingredientes: string[]) {
        console.log('prepararIngredientes')
        ingredientes.forEach( ing => cortar(ing) )
    }

    function cortar(ingrediente: string) {
        console.log('cortar', ingrediente)

    }

    function prepararAderezos(aderezos: string[]){
        console.log('prepararAderezos')
        aderezos.forEach( ader => aderezar(ader))

    }

    function aderezar(aderezo: string) {
        console.log('aderezar', aderezo)

    }

    function mezclar(cantidad: number) {
        console.log('mezclar')
        if(cantidad === 1){
            return
        }
        mezclar(cantidad - 1)

    }

    function comerEnsalada() {
        let ing: string = chupitodeensalada(ingredientes)
        let ade: string = chupitodeensalada(aderezos)
        const messageTemplate: string = 'Comi una ensalada de #in. Tambien le puse #ad. Estaba buenisima!!!'
        const message: string = messageTemplate.replace('#in', ing).replace('#ad', ade)
        
        console.log(`${message}`)
    }

    hacerEnsalada()

    function chupitodeensalada(list: string[]): string{
        let txt: string = ''
        list.forEach((item, index, arr) => {

            if(index == 0){
                txt = `${item}`  
            }
            if(index >0 && index < arr.length-1){
                txt = `${txt}, ${item}`  
            }
            if(index === arr.length-1){
                txt = `${txt} y ${item}`  
            }

        } )
        return txt
    }
}


