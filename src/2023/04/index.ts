export function index() {
    // const message: string = 'hola (odnum)';
    // const message: string = '(olleh) (dlrow) (otup)!';
    const message: string = 'sa(u(cla)atn)s';
    
    function decode(message: string) {
        
        const startIndex: number = message.indexOf('(')
        const isChild: boolean = message.indexOf('(', startIndex+1) < message.indexOf(')', startIndex+1)
        const endIndex: number = isChild ? message.lastIndexOf(')') : message.indexOf(')')
        const subStr: string = message.substring(startIndex, endIndex + 1)
        const subStrCleaned: string = subStr.substring(1, subStr.length - 1)
        if(subStrCleaned.indexOf('(') !== -1){
            const origMessage: string = message;
            const child: string = decode(subStrCleaned).split('').reverse().join('')
            const result: string = origMessage.replace(subStr,child )
            return result
        }
        const strReversed: string = subStrCleaned.split('').reverse().join('')
        const chain: string = message.replace(subStr, strReversed)

        
        if(chain.indexOf('(') !== -1){
            return decode(chain)
        }
        return chain

    }

    const chain = decode(message)
    console.log(chain)
}




