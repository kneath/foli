game.addEventListener("load", function(){

  // Get a character
  var alien = new Sprite(217, 122)
  alien.image = game.assets['images/alien.gif']
  alien.frame = 0
  alien.x = 500
  alien.y = 200
  game.rootScene.addChild(alien)

})
