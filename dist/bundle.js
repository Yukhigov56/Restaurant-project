(() => {
  const s = new (class {
    constructor(s, o, t) {
      (this.name = s), (this.age = o), (this.firstName = t);
    }
  })("Ilyas", 23, "Yukhigov");
  console.log(s);
})();
