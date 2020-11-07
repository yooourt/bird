class Scene extends New {
    constructor(game) {
        super()
        this.game = game
        this.elements = []
    }

    addElements(elements) {
        for (const e of elements) {
            this.addElement(e)
        }
    }

    addElement(element) {
        this.elements.push(element)
    }

    removeElement(element) {
        let i = this.elements.indexOf(element)
        if (i > -1) {
            this.elements.splice(i, 1)
        }
    }

    draw() {
        for (let e of this.elements) {
            e.draw()
        }
    }

    update() {
        for (let e of this.elements) {
            e.update()
        }
    }
}
