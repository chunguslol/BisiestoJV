// esBisiesto.spec.js
import esBisiesto from "./Bisiesto.js";

describe("Bisiesto", () => {
    it("Debería generar que todos los años divisibles entre 400 son bisiestos (por ejemplo, el 2000)", () => {
        expect(esBisiesto(2000)).toEqual(true);
    });

    it("Debería generar que Todos los años divisibles por 100 pero no por 400 NO son años bisiestos (1800)", () => {
        expect(esBisiesto(1800)).toEqual(false);
    });
    
    it("Todos los años divisibles por 4 pero no por 100 SON años bisiestos (2008)", () => {
        expect(esBisiesto(2008)).toEqual(true);
    });
    
    it("Todos los años que no son divisibles por 4 NO son años bisiestos (2017)", () => {
        expect(esBisiesto(2017)).toEqual(false);
    });
    
    it("Todos los años que no son divisibles por 4 NO son años bisiestos (2017)", () => {
        expect(esBisiesto(2017)).toEqual(false);
    });

});

