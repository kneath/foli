game.addEventListener("load", function(){

  // Get a character
  alien = new Sprite(217, 122)
  alien.image = game.assets['images/alien.gif']
  alien.frame = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4]
  alien.x = 430
  alien.y = 150
  game.rootScene.addChild(alien)

  // Alien moves left and right 200px
  var movedX = 0
  var direction = "left";
  alien.addEventListener("enterframe", function(){
    if (movedX >= 200*anger && direction == "left"){
      direction = "right"
      movedX = 0
      this.scaleX = -1
    }

    if (movedX >= 200*anger && direction == "right"){
      direction = "left"
      movedX = 0
      this.scaleX = 1
    }

    if (direction == "left"){
      this.x -= 1*speed
    } else {
      this.x += 1*speed
    }

    movedX = movedX + speed

    // DEATH
    if (this.intersect(foli))
      resetGame()
  })

})
