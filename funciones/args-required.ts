(() => {
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  // const name1 = fullName("fran");

  const number1: number = 10;
  // const name = fullName(number1, "lagorio");
  const name = fullName("fran", "lagorio");
  console.log({ name });
})();
