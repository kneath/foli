game.addEventListener("load", function(){

  // Get a character
  foli = new Sprite(32, 32)
  foli.image = game.assets['images/character.gif']
  foli.frame = 6
  foli.x = 0
  foli.y = 200
  game.rootScene.addChild(foli)

  // Let's move her
  var speed = 2;
  foli.addEventListener("enterframe", function(){
    var x = this.x
    var y = this.y

    if (game.input.right) {
      x += 1*speed
      this.frame = 24
    }
    if (game.input.left) {
      x -= 1*speed
      this.frame = 15
    }
    if (game.input.up) {
      y -= 1*speed
      this.frame = 33
    }
    if (game.input.down) {
      y += 1*speed
      this.frame = 6
    }

    // Did we hit a boundary?
    // We're using the bottom center 6 x 6 of the sprite for hit testing
    var topBoundary = this.y + (32 - 6)
    var bottomBoundary = this.y + 32
    var leftBoundary = this.x + (16 - 3)
    var rightBoundary = this.x + (16 + 3)
    if (map.hitTest(leftBoundary, topBoundary)){
      this.x += 2
      this.y += 2
      return
    }
    if (map.hitTest(rightBoundary, topBoundary)){
      this.x -= 2
      this.y += 2
      return
    }
    if (map.hitTest(leftBoundary, bottomBoundary)){
      this.x += 2
      this.y -= 2
      return
    }
    if (map.hitTest(rightBoundary, bottomBoundary)){
      this.x -= 2
      this.y -= 2
      return
    }

    this.x = x
    this.y = y
  })

})
