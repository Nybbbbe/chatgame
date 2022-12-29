class ChatGame:
  def __init__(self, admin_ws):
    self.players = []
    self.admin_ws = admin_ws
    print("ChatGame has been inited")

  def add_player(self, player_name, player_ws):
    self.players.append([player_name, player_ws])
