class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.initialize()
    }

    initialize() {
        let bg = GuaImage.new(this.game, 'bg')
        this.addElement(bg)

        let g = Ground.new(this.game)
        this.addElement(g)

        let b = Bird.new(this.game)
        b.x = 184
        b.y = 200
        this.addElement(b)
    }
}