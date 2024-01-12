import { parse, HtmlGenerator } from 'latex.js'
import { Button } from "../components/Button";

let dataURI: string | undefined;

const createLatexString = (string: string) => {
    let latex = "\\documentclass{article} \\title{Test} \\author{Matthias Antholzer} \\begin{document}" + string + "\\end{document}"

    let generator = new HtmlGenerator({ hyphenate: false })

    let doc = parse(latex, { generator: generator }).htmlDocument()

    dataURI = "data:text/html,<!DOCTYPE>" + doc.documentElement.outerHTML

    return dataURI
};

interface LatexDiscussionProps {
    content: string,
  }

const compile = () => {

    console.log("Compiling...");
    let textarea1 = document.getElementById("latex_textarea") as HTMLTextAreaElement;
    let latexoutput1 = document.getElementById("latex_output_area") as HTMLIFrameElement;

    if(latexoutput1 != null){

        latexoutput1.src = createLatexString(textarea1.value);

    }

};

const stringfromDefaultContent = (content:string) => {

    // TODO in content string there is a paragraph containing the data, how do I get the data out?

    console.log(content);

    return content;
}

createLatexString("Test");

export const LatexDiscussion: React.FC<LatexDiscussionProps> = (
    content,
) => {

    console.log("LatexDiscussion:" + content.content)
    return (
        <div className="h-4/6">
            <div className="flex flew-row justify-around gap-4 h-full">

                <div className="w-1/2 h-5/6 m-5">

                    <h1>Editor</h1>
                    <textarea className="h-full w-full shadow-2xl border-2 rounded-md" defaultValue={stringfromDefaultContent(content.content) } id="latex_textarea"></textarea>

                </div>

                <div className="w-1/2 h-5/6 m-5">
                    <h1>Vorschau</h1>
                    <iframe className="h-full w-full shadow-2xl border-2 rounded-md" id="latex_output_area" src={dataURI} ></iframe>

                </div>

            </div>

            <div className="flex flew-row justify-around gap-4">
                <Button onClick={compile}>
                    Compile
                </Button>
            </div>

        </div>

    );
}