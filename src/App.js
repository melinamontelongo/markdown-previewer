import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import defaultMarkdown from "./assets/defaultMarkdown.txt";
import { useState, useEffect } from "react";

function App() {
  const [userInput, setMarkdown] = useState("");

  //Sets default markdown to show at first load
  useEffect(() => {
    fetch(defaultMarkdown).then(res => res.text()).then(text => setMarkdown(text))
  }, []);

  //Handles when user enters text
  const handleChange = e => {
    setMarkdown(e.target.value);
  };
  return (
    <div className="App">
      <div className="row">
        <div className="editor-container col">
          <Editor 
            defaultValue={userInput} 
            handleChange={handleChange}/>
        </div>
        <div className="preview-container col">
          <Preview 
            input={userInput}/>
        </div>
      </div>
    </div>
  );
}

export default App;
