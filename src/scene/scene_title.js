class SceneTitle extends Scene {
  constructor(game) {
      super(game)
      this.initialize()
  }

  initialize() {
    let bg = Img.new(this.game, 'bg')
    this.addElement(bg)

    for (let i = 0; i < 30; i += 1) {
      let g = Ground.new(this.game, i)
      this.addElement(g)
    }
  }

}