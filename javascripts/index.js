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
      game.rootScene.addChild(map)

      // Get a character
      var foli = new Sprite(32, 32)
      foli.image = game.assets['images/characters/chara0.gif']
      foli.frame = 6
      foli.x = 8
      foli.y = 192
      game.rootScene.addChild(foli)

      // Let's move her
      foli.addEventListener("enterframe", function(){
        if (game.input.right) {
          this.x += 1
          this.frame = 24
        }
        if (game.input.left) {
          this.x -= 1
          this.frame = 15
        }
        if (game.input.up) {
          this.y -= 1
          this.frame = 33
        }
        if (game.input.down) {
          this.y += 1
          this.frame = 6
        }
      })

    }
    game.start()
}
