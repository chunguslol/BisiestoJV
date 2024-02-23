// esBisiesto.spec.js
import esBisiesto from "./Bisiesto.js";

describe("Bisiesto", () => {
    it("Debería generar que todos los años divisibles entre 400 son bisiestos (por ejemplo, el 2000)", () => {
        expect(esBisiesto(2000)).toEqual(true);
    });
    
});

