export function* inifinity(from:number) { 
    while(true) { 
        yield from++
    }
}