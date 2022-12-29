import { viewState, ViewStates } from "../App";
import { createState, gameState } from "../store";
import { errorNotification } from "./notifications";

class AdminWs {
  private ws: WebSocket;

  constructor (pin: string) {
    this.ws = new WebSocket('ws://localhost:8765');

    this.ws.addEventListener('open', (event) => {
      const msg = {
        type: "CREATE",
        pin: pin
      }
      this.ws.send(JSON.stringify(msg));
    });

    this.ws.addEventListener('message', (event) => {
      console.log('Message from server ', event.data);
      const msg = JSON.parse(event.data)
      if (msg.type === "CREATE_SUCCESS") {
        createState.setWaitingCreation(false);
        gameState.setPin(msg.pin);
        viewState.setCurrView(ViewStates.Lobby);
      }
      if (msg.type === "CREATE_ERROR") {
        createState.setWaitingCreation(false);
        errorNotification(msg.message)
      }
    });
  }
}

export default AdminWs;