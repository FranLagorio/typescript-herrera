"use strict";
(() => {
    let flash = {
        name: "fran",
        age: 27,
        powers: ["invisible", "rapido"],
    };
    let superman = {
        name: "super",
        age: 60,
        powers: ["rapido"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    const client = {
        name: "Fernando",
        age: 25,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Ottawa",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: "Melissa",
        age: 30,
        address: {
            city: "Toronto",
            id: 120,
            zip: "K2S U2A",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
//# sourceMappingURL=main.js.map