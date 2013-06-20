game.addEventListener("load", function(){

  // A pit of dispair.
  var pit = new Sprite(16, 16)
  pit.image = game.assets['images/map.png']
  pit.frame = 9
  pit.x = 16*15
  pit.y = 16*5
  pit.scaleX = 4
  pit.scaleY = 4
  game.rootScene.addChild(pit)

  pit.addEventListener("enterframe", function(){
    if (this.within(foli, 2*16 + 5))
      resetGame()
  })

  // A key! That foli can pick up and move around.
  key = new Sprite(16, 16)
  key.image = game.assets['images/key.png']
  key.frame = 0
  key.x = 16*35
  key.y = 16*7
  game.rootScene.addChild(key)

  key.addEventListener("enterframe", function(){
    if (foli.holdingKey) {
      this.x = foli.x
      this.y = foli.y
    } else {
      if (this.intersect(foli))
        foli.holdingKey = true
    }
  })

})
