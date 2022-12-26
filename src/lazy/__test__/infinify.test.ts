import { inifinity } from "../infinity"

describe('infinity test', () => {

    it('should start from argument', () => {
        const infinite = inifinity(3);

        expect(infinite.next().value).toBe(3)
    })
})