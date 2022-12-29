import { viewState, ViewStates } from "./App";

const StartView = () => {
  return (
    <div className="d-flex flex-column">
      <button type="button" className="btn btn-primary mb-2" onClick={() => {
        viewState.setCurrView(ViewStates.Create)
      }}>Create Game</button>
      <button type="button" className="btn btn-primary">Join Game</button>
    </div>
  )
}

export default StartView;