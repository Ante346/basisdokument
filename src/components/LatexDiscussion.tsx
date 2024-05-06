import { parse, HtmlGenerator } from 'latex.js'
import { Button } from "../components/Button";

let dataURI: string | undefined;

const createLatexString = (string: string) => {
    let latex = "\\documentclass{article} \\title{Test} \\author{Matthias Antholzer} \\begin{document}" + string + "\\end{document}"

    let generator = new HtmlGenerator({
        CustomMacros: (function() {
            var args:any = CustomMacros.args = {},
            prototype = CustomMacros.prototype;

            let name:String = "";
            let address:String = "";
            let parteibez:String = "";
      
            function CustomMacros(this: any, generator: any) {
                this.g = generator;
            }
      
            args['setparteibez'] = ['HV', 'g'];
            args['parteibez'] = ['H'];

            prototype['setparteibez'] = function(parteiBez:any) {
                let array = parteiBez.textContent.split(",");
                name = array[0];
                address = array[1];
                parteibez = array[2];
            };

            prototype['parteibez'] = function() {
                let parteiBezArray = new Array;
                parteiBezArray.push(name +" "+ address +" " + parteibez);
                return parteiBezArray;
            };
      
            return CustomMacros;
        }())
      })

    let doc = parse(latex, { generator: generator }).htmlDocument()

    dataURI = "data:text/html,<!DOCTYPE>" + doc.documentElement.outerHTML

    return dataURI
};

interface LatexDiscussionProps {
    content: string,
  }

const compile = () => {

    let textarea1 = document.getElementById("latex_textarea") as HTMLTextAreaElement;
    let latexoutput1 = document.getElementById("latex_output_area") as HTMLIFrameElement;

    if(latexoutput1 != null){

        latexoutput1.src = createLatexString(textarea1.value);

    }

};

const stringfromDefaultContent = (content:string) => {

    return content;
}

export const LatexDiscussion: React.FC<LatexDiscussionProps> = (
    content,
) => {

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