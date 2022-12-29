const ChatView = () => {
  return (
    <div className="chat">
      <div className="yours messages">
        <div className="message last">
          Hello, how's it going?
        </div>
      </div>
      <div className="mine messages">
        <div className="message">
          Great thanks!
        </div> 
        <div className="message last">
          How about you?
        </div>
      </div>
    </div>
  )
}

export default ChatView;