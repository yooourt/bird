class Bird extends GuaAnimation {
    constructor(game) {
        let animations = {
            flys: [],
        }

        for (let i = 0; i < 3; i += 1) {
            let b = GuaImage.new(game, 'bird_' + i)
            animations.flys.push(b)
        }

        super(game, animations, 'flys')

        this.gy = 10
        this.vy = 0
        this.rotation = 0

        this.setupInputs()
    }

    update() {
        super.update()

        this.y += this.vy
        this.vy += this.gy * 0.2

        let groundH = 560
        let h = groundH - this.frame.h + 4
        if (this.y > h) {
            this.y = h
            this.vy = 0
        }

        if (this.rotation < 45) {
            this.rotation += 4
        }
    }

    draw() {
        let context = this.game.context

        let f = this.frame
        let w2 = f.w / 2
        let h2 = f.h / 2

        context.save()
        context.translate(f.x + w2, f.y + h2)
        context.rotate(this.rotation * Math.PI / 180)
        context.drawImage(f.image, -w2, -h2)
        context.restore()
    }

    jump () {
        this.vy = -10
        this.rotation = -45
    }

    setupInputs() {
        this.game.registerAction('j', () => {
            this.jump()
        })
    }
}