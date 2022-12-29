import asyncio
import websockets
import json
from typing import TypedDict
from game import ChatGame

games = dict()

async def createGame(websocket, gamePin):
  print("Creating game with pin: {}".format(gamePin))
  if games.get(gamePin) == None:
    games[gamePin] = ChatGame(websocket)
    event = {
      "type": "CREATE_SUCCESS",
      "pin": gamePin
    }
    await websocket.send(json.dumps(event))
  else:
    event = {
      "type": "CREATE_ERROR",
      "message": "Pin taken"
    }
    await websocket.send(json.dumps(event))

async def handler(websocket):
  async for message in websocket:
    msg_json = json.loads(message)
    if msg_json["type"] == "CREATE":
      await createGame(websocket, msg_json["pin"])

      

async def main():
  async with websockets.serve(handler, "localhost", 8765):
    await asyncio.Future()  # run forever

print("Starting websocket on port 8765")
if __name__ == "__main__":
  asyncio.run(main())