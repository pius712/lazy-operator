function isIterable<T>(value:T | Iterable<T>): value is Iterable<T> { 
    return typeof value === 'object' && value !=null && Symbol.iterator in value;
}
