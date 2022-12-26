export function* filter<T, R>(predicfn: (arg: T) => boolean, iterable: Iterable<T>) { 
    for (const item of iterable) {
        if(predicfn(item)){ 
            yield item;
        } 
    }
}