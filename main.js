const mountCanvas = () => {
    let canvas = createCanvas(480, 640)
    canvas.id = 'game-canvas'
    e('#canvas-wrapper').appendChild(canvas)
}

const __main = () => {
    let images = {
        bg: 'img/bg_day.png',
        ground: 'img/ground.png',
    }

    mountCanvas()
    let game = GuaGame.instance(30, images, () => {
        let s = SceneTitle.new(game)
        game.replaceScene(s)
    })
    game.start()
}

__main()
