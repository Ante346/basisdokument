let name1:String = "";
let address1:String = "";
let parteibez1:String = "";
let name2:String = "";
let address2:String = "";
let street1:String = "";
let street2:String = "";
let parteibez2:String = "";
let streitgegenstand:String = "";
let gericht:String = "";

let applicationsSide = "";
let applicationsGericht ="";

export function createCustomMacros(){
    var args:any = CustomMacros.args = {},
    prototype = CustomMacros.prototype;
      
    function CustomMacros(this: any, generator: any) {
        this.g = generator;
    }

    //! \parteibez sollte optional Argumente annehmen und je nach aufruf anders funktionieren, aber KA wie... 😢
    //! \stggsger btw. auch, aber weiß ja auch nicht 😭
      
    args['setparteibezA'] = ['HV', 'g'];
    args['setparteibezB'] = ['HV', 'g'];
    args['parteibez'] = ['H'];

    args['setstggsger'] = ['HV', 'g'];
    args['stggsger'] = ['H'];

    args['setapplications'] = ['HV', 'g'];
    args['applications'] = ['H'];

    prototype['setparteibezA'] = function(parteiBez:any) {
        let array = parteiBez.textContent.split(",");

        name1 = array[0];
        street1 = array[1];
        address1 = array[2];
        

    };

    prototype['setparteibezB'] = function(parteiBez:any) {
        let array = parteiBez.textContent.split(",");

        name2 = array[0];
        street2 = array[1];
        address2 = array[2];
        

    };

    prototype['parteibez'] = function() {
        let parteiBezArray = [];
        parteiBezArray.push(name1 + "," + street1 + "," + address1 + " \n - klagende Partei - \n gegen \n" + name2 + "," + street2 + "," + address2 + " \n - Beklagte Partei - \n ");
        return parteiBezArray;
    };

    prototype['setstggsger'] = function(stgg:any) {
        let array = stgg.textContent.split(",");
        streitgegenstand = array[0];
        gericht = array[1];
    };

    prototype['stggsger'] = function() {
        let parteiBezArray = [];
        let date = new Date();
        
        let formattedDate = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

        parteiBezArray.push(`In der Sache ${streitgegenstand} streiten am ${gericht} am ${formattedDate}`);
        return parteiBezArray;
    };

    prototype['setapplications'] = function(parteiBez:any) {
        let array = parteiBez.textContent.split(",");

        applicationsSide = array[0];
        applicationsGericht = array[1];

    };

    prototype['applications'] = function() {

        let side = "missing"
        let otherSide = "missing"

        if(applicationsSide === "A"){
            side = "klagende Person";
            otherSide = "Beklagten";
        } else if(applicationsSide === "B"){
            side = "Beklagte Person";
            otherSide = "Angeklagten";
        }

        let applicationsArray = [];
        applicationsArray.push(`Ich zeige an, dass ich die ${side} vertrete. Namens und im Auftrag der ${side} erhebe ich Klage zum ${applicationsGericht} mit dem oben gestellten Antrag.
            Sollten die ${otherSide} ihre Verteidigungsbereitschaft nicht anzeigen, beantrage ich bereits jetzt den Erlass eines Versäumnisurteils. 
            Gegen die Übertragung des Rechtsstreits auf den Einzelrichter bestehen keine Bedenken.`);
        return applicationsArray;
    };

    return CustomMacros;
}