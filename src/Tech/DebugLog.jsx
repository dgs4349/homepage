
export const Debug = "production" !== process.env.NODE_ENV;

/*
    The webpack package we have forces lint warnings despite eslintignore
    This hides critical logs during page startup, so we have to disable warning
    for the first bit of page loading to prevent spam from eslint
*/
if(Debug) {
    const warn = console.warn;
    console.warn = ()=>{};
    setTimeout(() => console.warn = warn, 1000);
}


export function DebugDir(obj) {
    if(Debug) console.dir(obj);
}

export default function DebugLog(...args){
    if(Debug) console.log(...args);
}

if(Debug) {
    window.addEventListener('keydown', function(e){ if(e.key === 'F8') {debugger;} }, false);
}