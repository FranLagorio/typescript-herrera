(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "fran",
    age: 27,
    powers: ["invisible", "rapido"],
  };

  let superman: Hero = {
    name: "super",
    age: 60,
    powers: ["rapido"],
    getName() {
      return this.name;
    },
  };
})();
