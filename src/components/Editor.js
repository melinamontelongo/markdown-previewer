import "../stylesheets/Editor.css";

const Editor = ({ defaultValue, handleChange }) => {
    return (
        <div className="editor-window shadow pt-2 px-2 pb-1 border border-dark rounded">
            <div className="d-flex align-items-center justify-content-between">
                <p className="editor-window-title">Markdown</p>
                <p className="editor-close">X</p>
            </div>
            <textarea id="editor" value={defaultValue} onChange={handleChange}></textarea>
        </div>
    );
}

export default Editor;