enchant()

var game = new Game(640, 480)
game.scale = 1.25
game.fps = 25
game.preload('images/character.gif', 'images/map.png', 'images/alien.gif')
var map, foli

function resetGame(){
  foli.x = 0
  foli.y = 200

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
