import logo from './logo.svg';
import Chatbot from "react-chatbot-kit";
import './App.css';

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

function App(){
  return(
    <div classname="App">
      <header classname="App-header">
        <Chatbot config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;
