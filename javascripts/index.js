enchant()

window.onload = function() {
    var game = new Game(320, 320)
    game.preload('images/maps/map0.png', 'images/characters/chara0.gif')
    game.onload = function() {

      // Lay out a map
      var map = new Map(16, 16)
      map.image = game.assets['images/maps/map0.png']

      map.loadData(
        [
          [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
          [0, 1, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 2],
          [0, 1, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 7, 2],
          [0, 1, 2, 2, 2, 2, 2, 2, 2, 7, 2,25, 2, 7, 2],
          [0, 1, 1, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 7, 2],
          [0, 0, 1, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 2],
          [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
          [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
          [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2],
          [0, 0, 0, 0, 0, 0,15, 2, 2, 2, 2, 2, 2, 2, 2],
          [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2],
          [0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2],
          [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
          [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2],
          [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2]
        ]
      )

      map.collisionData =
        [
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
          [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
          [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
          [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
        ]

      game.rootScene.addChild(map)

      // Get a character
      var foli = new Sprite(32, 32)
      foli.image = game.assets['images/characters/chara0.gif']
      foli.frame = 6
      foli.x = 0
      foli.y = 200
      game.rootScene.addChild(foli)

      // Let's move her
      foli.addEventListener("enterframe", function(){
        x = this.x
        y = this.y

        if (game.input.right) {
          x += 1
          this.frame = 24
        }
        if (game.input.left) {
          x -= 1
          this.frame = 15
        }
        if (game.input.up) {
          y -= 1
          this.frame = 33
        }
        if (game.input.down) {
          y += 1
          this.frame = 6
        }

        // Did we hit a boundary?
        if (map.hitTest(x, y))
          return

        this.x = x
        this.y = y
      })

    }
    game.start()
}
