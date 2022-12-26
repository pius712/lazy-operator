export function* entries(obj:Record<string, any>)  {
    for (const each of obj.entries()) {
        yield each;
    }
}