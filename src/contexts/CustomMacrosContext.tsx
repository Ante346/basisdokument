let name:String = "";
let address:String = "";
let parteibez:String = "";
let streitgegenstand:String = "";
let gericht:String = "";

export function createCustomMacros(){
    var args:any = CustomMacros.args = {},
    prototype = CustomMacros.prototype;
      
    function CustomMacros(this: any, generator: any) {
        this.g = generator;
    }

    //! \parteibez sollte optional Argumente annehmen und je nach aufruf anders funktionieren, aber KA wie... 😢
    //! \stggsger btw. auch, aber weiß ja auch nicht 😭
      
    args['setparteibez'] = ['HV', 'g'];
    args['parteibez'] = ['H'];
    args['setstggsger'] = ['HV', 'g'];
    args['stggsger'] = ['H'];

    prototype['setparteibez'] = function(parteiBez:any) {
        let array = parteiBez.textContent.split(",");
        name = array[0];
        address = array[1];
        parteibez = array[2];
    };

    prototype['parteibez'] = function() {
        let parteiBezArray = [];
        parteiBezArray.push(name +" "+ address +" " + parteibez);
        return parteiBezArray;
    };

    prototype['setstggsger'] = function(stgg:any) {
        let array = stgg.textContent.split(",");
        streitgegenstand = array[0];
        gericht = array[1];
    };

    prototype['stggsger'] = function() {
        let parteiBezArray = [];
        parteiBezArray.push(streitgegenstand +" "+ gericht);
        return parteiBezArray;
    };

    return CustomMacros;
}