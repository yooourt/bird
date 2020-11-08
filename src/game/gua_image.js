class GuaImage extends New {
    constructor(game, name) {
        super()
        this.game = game

        const t = game.imageByName(name)
        this.image = t
        this.w = t.width
        this.h = t.height
        this.x = 0
        this.y = 0
    }

    position(x, y) {
        this.x = x
        this.y = y
    }

    update() {
    }

    draw() {
        this.game.drawImage(this)
    }
}
