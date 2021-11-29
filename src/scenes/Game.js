import Phaser from "phaser";

export default class Demo extends Phaser.Scene {
  constructor() {
    super("GameScene");
    this.angle = 4;
  }

  preload() {
    this.load.image("ship", "assets/ship_L.png");
  }

  create() {
    this.ship = this.physics.add.sprite(400, 70, "ship");

    this.cursor = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursor.right.isDown) {
      this.ship.angle += this.angle;
    }
    if (this.cursor.left.isDown) {
      this.ship.angle -= this.angle;
    }

    const velocityX = Math.cos(this.ship.rotation - 1.5);
    const velocityY = Math.sin(this.ship.rotation - 1.5);

    if (this.cursor.up.isDown) {
      this.ship.setVelocity(velocityX * 100, velocityY * 100);
    } else {
      this.ship.setVelocity(0, 0);
    }
  }
}
