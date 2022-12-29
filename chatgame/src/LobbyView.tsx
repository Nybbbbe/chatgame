import { observer } from "mobx-react-lite";
import { gameState } from "./store";

const LobbyView = observer(() => {
  return (
    <h1>Lobby: {gameState.pin}</h1>
  )
})

export default LobbyView;