(() => {
  const addNumbers = (a: number, b: number) => a + b;

  const greet = (name: string) => {
    return `Hola ${name}`;
  };

  const saveTheWorld = () => "El mundo esta salvado";

  // let myFunction: (y: number, z: number) => number;
  // //! myFunction = 10;

  // myFunction = addNumbers;
  // console.log(myFunction(1, 2));

  let myFunction: (x: string) => string;
  myFunction = greet;
  console.log(myFunction("fran"));

  //? let myFunction: () => string;
  //? myFunction = saveTheWorld;
  //? console.log(myFunction());
})();
