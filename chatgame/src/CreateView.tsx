import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import LoadingOverlay from "./LoadingOverlay";
import { createGame } from "./scripts/adminlogic";
import { createState } from "./store";

const CreateView = observer(() => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const ref = useRef(null);

  const updatePinLocation = (e: React.ChangeEvent<HTMLInputElement>, pinNum: number) => {
    const newPin = [...pin];
    newPin[pinNum] = e.target.value;
    const nextElement = e.target.nextElementSibling as HTMLInputElement;
    if (nextElement) {
      nextElement.focus(); 
    }
    setPin(newPin);
  }

  const clearPin = () => {
    setPin(["", "", "", ""]);
    const c =  ref.current! as HTMLInputElement;
    c.focus();
  }

  const valuesFilled = () => {
    return pin[0] !== "" && pin[1] !== "" && pin[2] !== "" && pin[3] !== ""
  }

  const handleCreateGame = () => {
    createGame(pin.join('').toLowerCase());
    createState.setWaitingCreation(true);
  }

  return (
    <>
    <h1>Add code</h1>
    <div className="passcode-area">
      <input ref={ref} onChange={(e) => updatePinLocation(e, 0)} autoFocus type="text" maxLength={1} value={pin[0]} />
      <input onChange={(e) => updatePinLocation(e, 1)} type="text" maxLength={1} value={pin[1]}/>
      <input onChange={(e) => updatePinLocation(e, 2)} type="text" maxLength={1} value={pin[2]}/>
      <input onChange={(e) => updatePinLocation(e, 3)} type="text" maxLength={1} value={pin[3]}/>
    </div>
    <div className="p-3">
      <button type="button" className="btn btn-secondary me-2" onClick={clearPin}>Clear Pin</button>
      <button type="button" className="btn btn-primary" disabled={!valuesFilled()} onClick={handleCreateGame}>Create Game</button>
    </div>
    {createState.waitingCreation && 
      <LoadingOverlay message="Creating game" />
    }
    </>
  )
})

export default CreateView;