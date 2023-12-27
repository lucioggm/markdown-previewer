import './App.css';
import { useState } from "react";
import {marked} from 'marked';

const initialMarkdown = `
# Ejemplo de Markdown

## Encabezados

### Títulos

### Listas ordenadas

1. Elemento 1
2. Elemento 2
3. Elemento 3
`



function App() {
    const [textInput, setTextInput] = useState(initialMarkdown);
    const [markedText, setMarkedText] = useState(marked.parse(initialMarkdown));

    function handleKeyPressed(event) {
        const tecla = event.keyCode;
        console.log(tecla);
        if (tecla === 13) {
            const textoNuevo = textInput + "\n";
            setTextInput(textoNuevo);
            setMarkedText(marked.parse(textoNuevo));
        }
    }

    function handleChange(event) {
        const newText = event.target.value;
        setTextInput(newText);
        setMarkedText(marked.parse(newText));
    }

    return (
        <div id={"app-wrapper"}>
            <section id={"header"}></section>
            <section id="editor-wrapper">
                <div id={"description"}>
                    <h1>Markdown Previewer</h1>
                    <p>by lucioggm</p>
                </div>
                <textarea
                    value={textInput}
                    onKeyDown={handleKeyPressed}
                    onChange={handleChange}
                    id="editor"
                ></textarea>
            </section>

            <hr />

            <section id={"preview-wrapper"}>
                <h1>Output</h1>
                <div id={"preview"} dangerouslySetInnerHTML={{ __html: markedText }}></div>
            </section>
        </div>
    );
}

export default App;
