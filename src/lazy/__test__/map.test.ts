import { map } from "../map"

describe('map test', () =>{ 


    it('array test', ()=>{ 
        const iterator = map((item) => `${item}`, [1,2,3,4])

        const actual = []
        for (const each of iterator) {
            actual.push(each)
        }

        expect(actual).toEqual(["1", "2", "3", "4"])
    })

    it('set test', ()=>{ 
        const iterator = map((item) => `${item}`, new Set([1,2,3,4]));

        const actual = []
        for (const each of iterator) {
            actual.push(each)
        }
        actual.sort()

        expect(actual).toEqual(["1", "2", "3", "4"])
    })
})