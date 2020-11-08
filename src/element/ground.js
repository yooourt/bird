class Ground extends New  {
    constructor(game) {
        super()
        this.game = game
        this.tiles = []
        for (let i = 0; i < 30; i += 1) {
            let t = GuaImage.new(this.game, 'ground')
            let o = i * t.w
            t.originX = o
            t.x = o
            t.y = 560
            this.tiles.push(t)
        }
    }

    update() {
        for (let t of this.tiles) {
            if (t.originX - t.x > t.w) {
                t.x = t.originX
            } else {
                t.x -= 5
            }
        }
    }

    draw() {
        for (let t of this.tiles) {
            t.draw()
        }
    }
}
