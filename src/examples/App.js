import React from 'react';

import { ChatBox } from '../lib';
import './style.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    const messages = [
      {
        "text": "Hello there",
        "id": "1",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        "text": "Hi Mr. Stark",
        "id": "2",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "1",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
    ];

    this.setState({ messages: messages });

  }

  render() {
    return (
      <div className='container' style={{maxWidth: '800px', paddingTop: '100px'}}>
        <div className='chat-header'>
          <h5>Chat</h5>
        </div>
        <ChatBox messages={this.state.messages} />
      </div>
    )
  }
}

export default App;
