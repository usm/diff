(async ()=>{
    //diff = await import('http://localhost:8000/diff/export.js')
    diff = await import('https://usm.github.io/diff/export.js')
    if(typeof(define)!='undefined'){
        define(diff)
    }
})()