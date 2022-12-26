function takeWhile<T>(predicFn: (each:T)=> boolean, iter: Iterable<T>) { 
    for (const each of iter) {
        if(predicFn(each)){ 
            return each;
        }
   }
}