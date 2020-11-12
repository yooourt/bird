class Pipe extends New {
    constructor(game, gap) {
        super()
        this.game = game

        this.pipe1 = GuaImage.new(game, 'pipe')
        this.pipe1.flipY = true
        this.pipe2 = GuaImage.new(game, 'pipe')

        this.w = this.pipe1.w
        this.speed = 7

        let ry = randomInt(200, 510)
        this.pipe1.y = ry - gap - this.pipe1.h
        this.pipe2.y = ry
    }

    update() {
        this.x -= this.speed
        this.pipe1.x = this.x
        this.pipe2.x = this.x

        let bird = this.game.scene.bird
        if (collided(bird, this.pipe1) ||
            collided(bird, this.pipe2)) {
            this.game.scene.gameOver()
        }
    }

    draw() {
        this.pipe1.draw()
        this.pipe2.draw()
    }

    debug() {
        this.speed = config.control.pipe_speed.value
    }
}

class Pipes extends New {
    constructor(game) {
        super()
        this.game = game
        this.pipes = []
        this.gap_horizontal = 200
        this.gap_vertical = 150
        this.paused = false

        let p = Pipe.new(game, this.gap_vertical)
        p.x = 520
        this.pipes.push(p)
    }

    update() {
        if (this.paused) {
            return
        }

        // remove pipe
        this.pipes = this.pipes.filter(p => {
            return p.x + p.w >= 0
        })

        // add pipe
        let canvasW = 480
        let stageW = 40
        let last = this.pipes[this.pipes.length - 1]
        let x = last.x + last.w + this.gap_horizontal
        if (x < canvasW + stageW) {
            let p = Pipe.new(this.game, this.gap_vertical)
            p.x = x
            this.pipes.push(p)
        }

        for (let p of this.pipes) {
            p.update()
        }
    }

    draw() {
        for (let p of this.pipes) {
            p.draw()
        }
    }

    stop() {
        this.paused = true
    }

    debug() {
        this.gap_horizontal = config.control.pipe_gap_horizontal.value
        this.gap_vertical = config.control.pipe_gap_vertical.value
        this.pipes.forEach(p => p.debug())
    }
}