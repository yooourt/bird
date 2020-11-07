class Game {
    static instance(...args) {
        if (isNil(this.i)) {
            this.i = new this(...args)
        }
        return this.i
    }

    constructor(fps, images, callback) {
        let canvas = e('#game-canvas')
        let context = canvas.getContext('2d')

        this.fps = fps
        this.imgs = images
        this.callback = callback
        this.canvas = canvas
        this.context = context
        this.keydowns = {}
        this.actions = {}
        this.images = {}
        this.scene = Scene.new()
    }

    replaceScene(scene) {
        this.scene = scene
    }

    imageByName(name) {
        return this.images[name]
    }

    handleEvents() {
        window.addEventListener('keydown', (event) => {
            this.keydowns[event.key] = true
        })

        window.addEventListener('keyup', (event) => {
            this.keydowns[event.key] = false
        })
    }

    handleGameEvents() {
        Object.keys(this.keydowns).forEach(k => {
            if (this.keydowns[k]) {
                defaultTo(this.actions[k], () => {})()
            }
        })
    }

    drawImg(img) {
        this.context.drawImage(img.image, img.x, img.y)
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    clearCanvas() {
        let { context, canvas } = this
        context.clearRect(0, 0, canvas.width, canvas.height)
    }

    runLoop() {
        const loop = () => {
            if (window.paused) {
                return
            }

            this.handleGameEvents()

            this.scene.update()

            this.clearCanvas()

            this.scene.draw()

            setTimeout(loop, 1000 / (window.fps || this.fps))
        }

        loop()
    }

    preloadImages() {
        let ps = Object.entries(this.imgs).map(([name, path]) => {
            return loadImg(path).then(img => {
                this.images[name] = img
            })
        })
        return Promise.all(ps)
    }

    start() {
        this.handleEvents()
        this.preloadImages().then(() => {
            this.callback()
            this.runLoop()
        })
    }
}