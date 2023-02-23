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

const proxy = 'https://proxy.jalmeida.workers.dev/?'

// fetch TP53 data - START - //

async function getProxyCSV(url='https://storage.googleapis.com/tp53-static-files/data/GermlineDownload_r20.csv'){
    url = proxy+url
    let csv = await (await fetch(url)).text()
    return csv2json(csv)
}

function csv2json(csv){
    csv=csv.replace('"','').replace(/\\n"$/,'') // deblank specific to TP53 csv
    let rows = csv.split(/\\n/g)
    rows = rows.map(r=>{
        return r.split(',')
    })
    let cols=rows[0]
    rows=rows.slice(1)
    let json={}
    cols.forEach((c,i)=>{
        json[c]=[]
        rows.forEach((r,j)=>{
            json[c][j]=r[i]
        })
    })
    return json
}

async function fetchTP53data(url='https://storage.googleapis.com/tp53-static-files/data/GermlineDownload_r20.csv'){
    console.log(`fetching TP53 data from ${url}`)
    url = proxy+url
    let csv = await (await fetch(url)).text()
    return csv2json(csv)
}

// fetch TP53 data - START - //

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
    getFasta,
    fetchTP53data
}