(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  // const name1 = fullName("fran");

  const number1: number = 10;

  const name = fullName("fran", "lagorio");
  const name2 = fullName("fran", 1, "lagorio");

  console.log({ name });
})();
