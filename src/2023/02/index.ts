export function index() {
    const gifts: string[] = ['tren', 'oso', 'pelota'];
    const materials: string = 'tronesal';
    function manufacture(gifts: string[], materials: string): string[] {
        return gifts.filter( gift => {
            const giftArr: string[] = gift.split('') 
            const hasMaterial: boolean =  giftArr.every( char => materials.includes(char) )
            if(hasMaterial === true){
                return gift
            }
        } )

    }

    const result: string[] = manufacture(gifts, materials)

    console.log(result)
}