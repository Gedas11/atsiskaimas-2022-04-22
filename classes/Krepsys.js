import Vaisius from "./Vaisius.js";

// export default Krepsys
class Krepsys {
  static count = 0;
  static vaisiai = 0;
  static grauztukai = new Map();

  constructor(size) {
    this.list = [];
    this.current = 0;

    this.populate(size);
  }

  populate(length) {
    //sugeneruojamas sarasas pasinaudojant vaisius klase
    this.list = [...Array(length).keys()].map(() => new Vaisius());
  }
  markRead() {
    if (this.list.length < this.current) {
      this.list[this.current].read();
      this.current += 1;
      return `kitas vaisius  ${this.current}`;
    }
    return "visi vaisiai";
  }

}

export default Krepsys;
