export function index() {
    // const movements = '>>*<';//2
    // const movements = '<<<>';//2
    const movements = '>***>';//5

    function maxDistance(movements: string) {
        
        const charats:string[] = movements.split('')
        const charatObj: any = {};
        
        charats.forEach( charat => {
            charatObj[charat] = charatObj[charat] ? charatObj[charat] +1 : 1; 
        } )
        const left: number = charatObj['<'] ?? 0;
        const right: number = charatObj['>'] ?? 0;
        const both: number = charatObj['*'] ?? 0;


        
        const max: number = Math.max( right, left );
        const min: number = Math.min( right, left );
        const ast: number = both;
        const result: number = max + ast - min;


        
        return result
    }

    const result = maxDistance(movements)
    console.log(result)
}



