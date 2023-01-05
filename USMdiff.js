(async ()=>{
    USMdiff = await import('./export.js')
    if(typeof(define)!='undefined'){
        define(USMdiff)
    }
})()