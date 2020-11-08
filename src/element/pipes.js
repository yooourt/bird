class Pipe extends New {
    constructor(game) {
        super()
        this.game = game
        this.gap = 150

        this.pipe1 = GuaImage.new(game, 'pipe')
        this.pipe1.flipY = true
        this.pipe2 = GuaImage.new(game, 'pipe')

        this.w = this.pipe1.w

        let ry = randomInt(200, 510)
        this.pipe1.y = ry - this.gap - this.pipe1.h
        this.pipe2.y = ry
    }

    update() {
        this.x -= 7
        this.pipe1.x = this.x
        this.pipe2.x = this.x
    }

    draw() {
        this.pipe1.draw()
        this.pipe2.draw()
    }
}

class Pipes extends New {
    constructor(game) {
        super()
        this.game = game
        this.pipes = []
        this.gap = 100

        let p = Pipe.new(game, 'pipe')
        p.x = 520
        this.pipes.push(p)
    }

    update() {
        // remove pipe
        this.pipes = this.pipes.filter(p => {
            return p.x + p.w >= 0
        })

        // add pipe
        let last = this.pipes[this.pipes.length - 1]
        let canvasW = 480
        let stageW = 40
        let x = last.x + last.w + this.gap
        if (x < canvasW + stageW) {
            let p = Pipe.new(this.game, 'pipe')
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
}