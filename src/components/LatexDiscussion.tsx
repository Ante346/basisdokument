import { parse, HtmlGenerator } from 'latex.js'

let latex = "\\documentclass{article} \\title{testitest} \\author{Matthias Antholzer} \\begin{document} \\maketitle{} Hi, this is a line of text. \\end{document}"

let generator = new HtmlGenerator({ hyphenate: false })

let doc = parse(latex, { generator: generator }).htmlDocument()

//console.log(doc.documentElement.outerHTML)

export const LatexDiscussion = () => {

    return (
        
        <div className="flex flew-row justify-around gap-4">

            <div>

                <h1>Editor</h1>
                <textarea></textarea>

            </div>

            <div>
                <h1>Vorschau</h1>
                <div>{doc.documentElement.outerHTML}</div>

            </div>

        </div>
        

    );
}