import Helper from '../untilis/Helper/Helper.js'

class Vaisius {
    constructor() {
        this.dydis = Helper.rnd(5 - 26)
        this.id = Helper.rnd(1000000 - 9999999)
        this.prakastas = false
    }
    prakasti() {
        this.prakastas = true
    }
}

export default Vaisius