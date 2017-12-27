phina.globalize();

var SCREEN_W = 640;
var SCREEN_H = 960;

phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
    this.backgroundColor = '#444'

    var b2Layer = Box2dLayer().addChildTo(this);

    var rect = RectangleShape({
      x: SCREEN_W/2,
      y: 0
    }).addChildTo(this);
    
    b2Layer.createBody({
      type: 'dynamic',
      shape: 'box'
    }).attachTo(rect);

    var floor = RectangleShape({
      width: SCREEN_W,
      height: 20,
      x: SCREEN_W/2,
      y: SCREEN_H-20,
      rotation: 1
    }).addChildTo(this);

    b2Layer.createBody({
      type: 'static',
      shape: 'box'
    }).attachTo(floor);

  }
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
  });
  app.run();
});
