(() => {
  const hero: string = "flash";

  function returnName(): string {
    return hero;
  }

  const activateBatiSignal = (): string => {
    return "activada";
  };

  // infiere que heroName va ser string (poner cursor encima)
  const heroName = returnName();
})();
