import StartView from './StartView';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import CreateView from './CreateView';
import LobbyView from './LobbyView';
import { ToastContainer } from 'react-toastify';

import './App.scss'
import 'react-toastify/dist/ReactToastify.css';

export enum ViewStates {
  Start,
  Create,
  Game,
  Lobby
}

class ViewState {
  currView = ViewStates.Start;

  constructor() {
      makeAutoObservable(this)
  }

  setCurrView(newViewState: ViewStates) {
      this.currView = newViewState;
  }
}

export const viewState = new ViewState();

const App = observer(() => {
  

  return (
    <div className="App">
      {viewState.currView === ViewStates.Start && 
        <StartView />
      }
      {viewState.currView === ViewStates.Create && 
        <CreateView />
      }
      {viewState.currView === ViewStates.Lobby && 
        <LobbyView />
      }
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
});

export default App
