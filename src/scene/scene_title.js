class SceneTitle extends GuaScene {
  constructor(game) {
      super(game)
      this.initialize()
  }

  initialize() {
    let bg = GuaImage.new(this.game, 'bg')
    this.addElement(bg)

    for (let i = 0; i < 30; i += 1) {
      let g = Ground.new(this.game, i)
      this.addElement(g)
    }
  }

}