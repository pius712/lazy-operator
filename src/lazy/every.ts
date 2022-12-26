/** 
 * 모두 매치되지 않는 경우, 모든 값을 순회할 필요가 없다.
 */
export function* every<T>(predicFn:(each:T)=>boolean, iterable:Iterable<T>) { 
    
    let temp = true;
    for (const each of iterable) {
        temp = predicFn(each)
        if(!temp) {
            yield false;
        }    
    }
    if(temp) { 
        yield temp;
    }
}