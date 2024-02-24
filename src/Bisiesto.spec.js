// esBisiesto.spec.js
import esBisiesto from "./Bisiesto.js";

describe("Bisiesto", () => {
    it("Debería generar que todos los años divisibles entre 400 son bisiestos (por ejemplo, el 2000)", () => {
        expect(esBisiesto(2000)).toEqual(true);
    });

    it("Debería generar que Todos los años divisibles por 100 pero no por 400 NO son años bisiestos (1800)", () => {
        expect(esBisiesto(1800)).toEqual(false);
    });
    
});

