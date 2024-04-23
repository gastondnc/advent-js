export function index() {
    const original = 'abcd'
    const modified = 'abcde'

    function findNaughtyStep(original: string, modified: string): string {
        
        let result: string = '';
        let obj: {[key: string]: number} = {};
        const bothArr: string[] = original.concat(modified).split('');

        bothArr.forEach((el:string) => {
            obj = {
                ...obj,
                [el]: obj[el] ? obj[el]+1 : 1
            }
        });

        for(let key in obj){
            if(obj[key]===1){
                result = result + key 
            }
        }

        return result
    }

    const result = findNaughtyStep(original, modified)

    console.log(result)

}