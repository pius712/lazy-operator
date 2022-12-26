export function* keys(obj:Record<string, any>)  {
    for (const each of obj.keys()) {
        yield each;
    }
}