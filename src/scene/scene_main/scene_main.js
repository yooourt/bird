class SceneMain extends GuaScene {
    constructor(game, config) {
        super(game)
        this.initialize(config)
    }

    initialize(config) {
        let bg = GuaImage.new(this.game, 'bg')
        this.addElement(bg)
        this.background = bg

        let pipes = Pipes.new(this.game)
        this.addElement(pipes)
        this.pipes = pipes

        let g = Ground.new(this.game)
        this.addElement(g)
        this.ground = g

        let b = BirdMain.new(this.game)
        b.x = config.bird.x
        b.y = config.bird.y
        this.addElement(b)
        this.bird = b
    }

    gameOver() {
        this.bird.fall()
        this.pipes.stop()
        this.ground.stop()
    }
}