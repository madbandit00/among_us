import Phaser from "phaser";
//import ControlPanel from "../entity/ControlPanel";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");

  }

  preload(){
    this.load.spritesheet("astronaut", "assets/spritesheets/astronaut3.png", {
        frameWidth: 29,
        frameHeight: 37,
      });
    this.load.image("vendingMachine", "assets/sprites/vendingMachine.png");
    this.load.image("mainroom", "assets/backgrounds/mainroom.png");

  }

  create(){
    const scene = this;
    //BACKGROUND
    this.add.image(0, 0, "mainroom").setOrigin(0);

    //CREATE SOCKET
    this.socket = io();

  }

  update(){

  }

}