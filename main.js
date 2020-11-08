const mountCanvas = () => {
    let canvas = createCanvas(480, 640)
    canvas.id = 'game-canvas'
    e('#canvas-wrapper').appendChild(canvas)
}

const __main = () => {
    let images = {
        bg: 'img/bg_day.png',
        ground: 'img/ground.png',
        bird_0: 'img/bird_s1.png',
        bird_1: 'img/bird_s2.png',
        bird_2: 'img/bird_s3.png',
    }

    mountCanvas()

    let game = GuaGame.instance(30, images, () => {
        let s = SceneTitle.new(game)
        game.replaceScene(s)
    })

    enableDebugMode(game, true)

    game.start()
}

__main()
