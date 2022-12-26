import { range } from "../range"

describe('range test', () =>{ 

    it('should start from', () => { 
        const r = range(1,5);

        expect(r.next().value).toBe(1)
    })

    it('should emit from 1 to 5', () => { 
        const r = range(1,5);

        const list = []
        for (const item of r) {
            list.push(item);
        }

        expect(list).toEqual([1, 2, 3, 4, 5])
    })
})