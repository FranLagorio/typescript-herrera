"use strict";
(() => {
    let hero = ["Fran", 27];
    hero[0] = 50;
    hero[0] = "50";
    //esto estaria mal, pero hay que tener cuidado porque no salta con error
    hero.push("esto no funciona");
    console.log(hero);
})();
