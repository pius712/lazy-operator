export function* map<T, R>(fn: (arg: T) => R, iterable: Iterable<T>) { 
    for (const item of iterable) {
        yield fn(item);
    }
}