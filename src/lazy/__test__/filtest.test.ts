import { filter } from "../filter"

describe('lazy filter test', () =>{ 



    it('should get even number', ()=>{ 
        const iterator = filter((item) => item % 2 === 0 , [1,2,3,4])

        const actual = []
        for (const each of iterator) {
            actual.push(each)
        }

        expect(actual).toEqual([2,4])
    })
})