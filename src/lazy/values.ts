
export function* values(obj:Record<string, any>)  {
    for (const each of obj.values()) {
        yield each;
    }
}