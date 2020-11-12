class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.initialize()
    }

    initialize() {
        let bg = GuaImage.new(this.game, 'bg')
        this.addElement(bg)
        this.background = bg

        let pipes = Pipes.new(this.game)
        this.addElement(pipes)
        this.pipes = pipes

        let g = Ground.new(this.game)
        this.addElement(g)
        this.ground = g

        let b = Bird.new(this.game)
        b.x = 184
        b.y = 200
        this.addElement(b)
        this.bird = b
    }

    gameOver() {
        this.bird.fall()
        this.pipes.stop()
        this.ground.stop()
    }
}