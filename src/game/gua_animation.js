class GuaAnimation extends New {
    constructor(game) {
        super()
        this.game = game

        this.x = 0
        this.y = 0

        this.frameIndex = 0
        this.animations = {}
        this.currentAnimation = []

        let flys = []
        for (let i = 0; i < 3; i += 1) {
            let s = GuaImage.new(this.game, 'bird_' + i)
            flys.push(s)
        }
        this.animations['flys'] = flys

        this.changeAnimation('flys')
    }

    changeAnimation(name) {
        this.currentAnimation = this.animations[name]
        this.frameIndex = 0
    }

    update() {
        let i = this.frameIndex + 1
        this.frameIndex = circleIndex(this.currentAnimation, i)
    }

    draw() {
        let img = this.currentAnimation[this.frameIndex]
        img.draw()
    }
}