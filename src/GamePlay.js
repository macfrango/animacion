
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/FONDO.webp');
        game.load.spritesheet('samurai', 'assets/images/ar.png', 555, 600, 11);

    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.samurai = game.add.sprite(0, 500, 'samurai');
        this.samurai.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,0,],20,true);
        this.samurai.animations.play("walk");


    },
    update: function() {
        console.log("update");
        this.samurai.x += 8;
        
    }
}

var game = new Phaser.Game(1500, 960, Phaser.CANVAS);

    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");