(async ()=>{
    //diff = await import('./export.js')
    diff = await import('https://usm.github.io/diff/export.js')
    if(typeof(define)!='undefined'){
        define(diff)
    }
})()