import AdminWs from "./adminws";

let adminWs = null;

export const createGame = (pin: string) => {
  adminWs = new AdminWs(pin);
} 