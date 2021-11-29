import Phaser from "phaser";
import config from "./config";
import GameScene from "./scenes/Game";

/* eslint-disable-next-line */
const game = new Phaser.Game(Object.assign(config, { scene: [GameScene] }));
