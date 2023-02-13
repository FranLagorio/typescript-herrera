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
