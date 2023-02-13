"use strict";
(() => {
    let isSuperman;
    // let isSuperman: (number | string)[];
    // error
    // isSuperman = [1, 2, 3, 4, "a"];
    isSuperman = [1, 2, 3, 4, 11];
    isSuperman.push("a");
    isSuperman.forEach((v) => console.log(v.toUpperCase()));
})();
