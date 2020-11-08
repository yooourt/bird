class Ground extends GuaImage {
    constructor(game, index) {
        super(game, 'ground')
        this.initialize(index)
    }

    initialize(index) {
        let ox = index * this.w
        this.originX = ox
        this.x = ox
        this.y = 560
    }

    update() {
        if (this.originX - this.x > this.w) {
            this.x = this.originX
        } else {
            this.x -= 5
        }
    }
}
