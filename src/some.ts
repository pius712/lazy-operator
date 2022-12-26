/** 
 * 하나라도 매치되지 않는 경우, 모든 값을 순회할 필요가 없다.
 */
export function* some<T>(predicFn:(each:T)=>boolean, iterable:Iterable<T>) { 
    
    let temp = true;
    for (const each of iterable) {
        temp = predicFn(each)
        if(temp) {
            yield temp;
        }    
    }
    if(!temp) { 
        yield temp;
    }
}