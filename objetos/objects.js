"use strict";
(() => {
    let flash = {
        name: "fran",
        age: 27,
        powers: ["invisible", "rapido"],
    };
    //! flash = {
    //!   name: "otro nombre",
    //! };
    // flash = {
    //   name: "otro nombre",
    //   age: 29,
    //   powers: ["fuerza"],
    // };
    flash = {
        name: "otro nombre",
        //   age: 29,
        powers: ["fuerza"],
        getName() {
            return this.name;
        },
    };
})();
