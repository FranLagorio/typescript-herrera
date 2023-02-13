(() => {
  class Avenger {
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antMan: Avenger = new Avenger("AntMan", "Capitan");

  // console.log(antMan.avgAge);
  console.log(Avenger.avgAge);
})();
