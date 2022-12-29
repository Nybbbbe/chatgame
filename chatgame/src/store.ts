import { makeAutoObservable } from "mobx";

class CreateState {
  waitingCreation = false;

  constructor() {
      makeAutoObservable(this)
  }

  setWaitingCreation(newWaitingCreation: boolean) {
      this.waitingCreation = newWaitingCreation;
  }
}

export const createState = new CreateState();

class GameState {
  pin = "";
  players = []

  constructor() {
      makeAutoObservable(this)
  }

  setPin(newPin: string) {
      this.pin = newPin;
  }
}

export const gameState = new GameState();

