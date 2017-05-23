import * as m from "mithril"

class HelloWorld {
    constructor() {
        this.val = "helloworld"
    }

    view() {
        return m(".hw", this.val)
    }
}

module.exports.HelloWorld = HelloWorld