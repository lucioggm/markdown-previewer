import './App.css';
import {useState} from "react";
import {marked, use} from 'marked';
// or const { marked } = require('marked');

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');


function App() {

    const [textInput , setTextInput] = useState("")
    const [markedText,setMarkedText] = useState("")

    function handleChange(event)
    {

        setTextInput(event.target.value)
        setMarkedText(marked.parse(event.target.value))
    }

    return <div>
        <section id={"editor-wrapper"}>
            <h1> Escribe algo</h1>
            <textarea onChange={handleChange} id = "editor"></textarea>
        </section>

        <hr/>
        <section>
            <h1>Output</h1>
            <div dangerouslySetInnerHTML={{ __html: markedText }}></div>

        </section>




    </div>
}

export default App;
