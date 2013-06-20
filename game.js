enchant()

var game = new Game(640, 480)
game.scale = 1.25
game.fps = 25
game.preload('images/character.gif', 'images/map.png', 'images/alien.gif', 'images/key.png', 'images/treasure-chest.png')
var map, foli, key

function resetGame(){
  foli.x = 0
  foli.y = 200

  foli.holdingKey = false
  key.x = 16*35
  key.y = 16*7

  document.body.setAttribute('style', 'background-color:#911')
  setTimeout(function() {
    document.body.setAttribute('style', '')
  }, 100)
  setTimeout(function() {
    document.body.setAttribute('style', 'background-color:#911')
  }, 200)
  setTimeout(function() {
    document.body.setAttribute('style', '')
  }, 300)
}
