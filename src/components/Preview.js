import { marked } from 'marked';
import DOMPurify from "dompurify";
import hljs from 'highlight.js';
import "highlight.js/styles/default.css";
import "../stylesheets/Preview.css";

const Preview = ({ input }) => {

    //Parses markdown and returns sanitized html
    const parseMarkdown = markdownToParse => {
        marked.setOptions({
            headerPrefix: "parsed",
            langPrefix: "language-",
            breaks: true,
            highlight: function (lang, code) {
                return hljs.highlightAuto(lang, code).value;
            }
        })
        let parsedMarkdown = DOMPurify.sanitize(marked.parse(markdownToParse));
        return { __html: parsedMarkdown }
    }
    return (
        <div className="preview-window shadow pt-2 px-2 pb-2 border border-dark rounded">
            <div className="d-flex align-items-center justify-content-between">
                <p className="preview-window-title">Preview</p>
                <p className="preview-close">X</p>
            </div>
            <div id="preview" dangerouslySetInnerHTML={parseMarkdown(input)}></div>
        </div>
    )
}

export default Preview;