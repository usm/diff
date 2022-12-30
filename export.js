console.log('importing https://usm.github.io/diff/export.js');

const hello = 'hello USMdiff';

class USM {
    constructor (seq='accgtgtgacgatggca',abc=unique(seq)){
        //if(!abc){abc=unique(seq)}
        this.seq=seq
        this.abc=abc
    } 
}

async function getFasta(url='https://www.ebi.ac.uk/ena/browser/api/fasta/OD914762'){
    let txt = await (await fetch(url)).text()
    let fa = {}
    if(txt[0]=='>'){
        fa.head=txt.match(/^[^/\n/\r]+/)[0].slice(1)
        fa.body=txt.replace(/^[^/\n/\r]+/,'').replace(/[/\n/\r]/g,'')
    }else{
        fa.body=txt
    }
    return fa
}

function unique(str){
    let y={}
    str.split('').forEach(s=>{
        y[s]=true
    })
    return Object.keys(y)
}

export {
    hello,
    USM,
    unique,
    getFasta
}