var m = require("mithril")

class HelloWorld {
    constructor() {
        this.val = "helloworld"
    }

    view() {
        return m(".hw", this.val)
    }
}

m.mount(document.body, new HelloWorld())
