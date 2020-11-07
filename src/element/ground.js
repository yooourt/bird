class Ground extends Img {
  constructor(game, index) {
    super(game, 'ground')
    this.initialize(index)
  }

  initialize(index) {
    let ox = index * this.w
    this.originX = ox
    this.x = ox
    this.y = 560
    this.count = 5
  }

  update() {
    this.count -= 1

    let skip = (this.count === 0)

    if (this.count === 0) {
      this.count = 5
    }

    if (skip) {
      this.x = this.originX
    } else {
      this.x -= 5
    }
  }
}
