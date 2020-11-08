const mountCanvas = () => {
    let canvas = createCanvas(480, 640)
    // let canvas = createCanvas(680, 640)
    canvas.id = 'game-canvas'
    e('#canvas-wrapper').appendChild(canvas)
}

const __main = () => {
    mountCanvas()

    let debugEnabled = config.debugEnabled

    insertDebugControls(debugEnabled)

    let game = GuaGame.instance({
        debugEnabled,
        fps: 30,
        images: {
            bg: 'img/bg_day.png',
            ground: 'img/ground.png',
            pipe: 'img/pipe.png',
            bird_0: 'img/bird_s1.png',
            bird_1: 'img/bird_s2.png',
            bird_2: 'img/bird_s3.png',
        },
        callback: () => {
            let s = SceneTitle.new(game)
            game.replaceScene(s)
        }
    })

    game.start()
}

__main()
