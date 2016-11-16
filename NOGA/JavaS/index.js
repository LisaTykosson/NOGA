function famnr() {
    if
                (document.getElementById("familj").selectedIndex == "1") {
        document.getElementById("familjenr").style.display = "none";

    }
    else if (
        document.getElementById("familj").selectedIndex == "2") {
        document.getElementById("familjenr").style.display = "block";

    }
    else {

        document.getElementById("familjenr").style.display = "none";
    }

}
function umecheck() {
    if(
        document.getElementById("umea").checked) {
        document.getElementById("ume").style.display = "block";

    }
    else {
        document.getElementById("ume").style.display = "none";
    }
}
function uppscheck() {
    if (
        document.getElementById("uppsa").checked) {
        document.getElementById("upps").style.display = "block";

    }
    else {
        document.getElementById("upps").style.display = "none";
    }
}
function stockcheck() {
    if (
        document.getElementById("stockh").checked) {
        document.getElementById("stock").style.display = "block";

    }
    else {
        document.getElementById("stock").style.display = "none";
    }
}
function linkcheck() {
    if (
        document.getElementById("linko").checked) {
        document.getElementById("link").style.display = "block";

    }
    else {
        document.getElementById("link").style.display = "none";
    }
}
function gotecheck() {
    if (
        document.getElementById("goteb").checked) {
        document.getElementById("gote").style.display = "block";

    }
    else {
        document.getElementById("gote").style.display = "none";
    }
}
function lundcheck() {
    if (
        document.getElementById("lund").checked) {
        document.getElementById("lun").style.display = "block";

    }
    else {
        document.getElementById("lun").style.display = "none";
    }
}
function annatcheck() {
    if (
        document.getElementById("annat").checked) {
        document.getElementById("anna").style.display = "block";

    }
    else {
        document.getElementById("anna").style.display = "none";
    }
}
function labutrind() {
    if 
                (document.getElementById("labind").selectedIndex == "2") {
        document.getElementById("labutrfam").style.display = "none"
        document.getElementById("screenind").style.display = "block";


    }
    else if (
        document.getElementById("labind").selectedIndex == "1") {
        document.getElementById("labutrfam").style.display = "block";
        document.getElementById("screenind").style.display = "none";

    }
    else {

        document.getElementById("labutrfam").style.display = "none";
        document.getElementById("screenind").style.display = "none";
    }

}
function screening() {
    if 
                (document.getElementById("screen").selectedIndex == "1") {
        document.getElementById("gen").style.display = "none";

    }
    else if (
        document.getElementById("screen").selectedIndex == "2") {
        document.getElementById("gen").style.display = "block";

    }
    else {

        document.getElementById("gen").style.display = "none";
    }

}
function anlag() {
    if
                (document.getElementById("anlagmsi").selectedIndex == "1") {
        document.getElementById("msi").style.display = "none";

    }
    else if (
        document.getElementById("anlagmsi").selectedIndex == "2") {
        document.getElementById("msi").style.display = "block";

    }
    else {

        document.getElementById("msi").style.display = "none";
    }

}
function antalgen() {
    if
                (document.getElementById("mutationer").selectedIndex == "1") {
        document.getElementById("gen1").style.display = "none";
        document.getElementById("gen2").style.display = "none";
        document.getElementById("gen3").style.display = "none";
        document.getElementById("gen4").style.display = "none";
        document.getElementById("gen5").style.display = "none";
        document.getElementById("gen6").style.display = "none";

    }
    else if (
        document.getElementById("mutationer").selectedIndex == "2") {
        document.getElementById("gen1").style.display = "block";
        document.getElementById("gen2").style.display = "none";
        document.getElementById("gen3").style.display = "none";
        document.getElementById("gen4").style.display = "none";
        document.getElementById("gen5").style.display = "none";
        document.getElementById("gen6").style.display = "none";

    }
    else if (
        document.getElementById("mutationer").selectedIndex == "3") {
        document.getElementById("gen1").style.display = "block";
        document.getElementById("gen2").style.display = "block";
        document.getElementById("gen3").style.display = "none";
        document.getElementById("gen4").style.display = "none";
        document.getElementById("gen5").style.display = "none";
        document.getElementById("gen6").style.display = "none";

    }
    else if (
    document.getElementById("mutationer").selectedIndex == "4") {
        document.getElementById("gen1").style.display = "block";
        document.getElementById("gen2").style.display = "block";
        document.getElementById("gen3").style.display = "block";
        document.getElementById("gen4").style.display = "none";
        document.getElementById("gen5").style.display = "none";
        document.getElementById("gen6").style.display = "none";

    }
    else if (
    document.getElementById("mutationer").selectedIndex == "5") {
        document.getElementById("gen1").style.display = "block";
        document.getElementById("gen2").style.display = "block";
        document.getElementById("gen3").style.display = "block";
        document.getElementById("gen4").style.display = "block";
        document.getElementById("gen5").style.display = "none";
        document.getElementById("gen6").style.display = "none";

    }
    else if (
    document.getElementById("mutationer").selectedIndex == "6") {
        document.getElementById("gen1").style.display = "block";
        document.getElementById("gen2").style.display = "block";
        document.getElementById("gen3").style.display = "block";
        document.getElementById("gen4").style.display = "block";
        document.getElementById("gen5").style.display = "block";
        document.getElementById("gen6").style.display = "none";

    }
    else if (
    document.getElementById("mutationer").selectedIndex == "7") {
        document.getElementById("gen1").style.display = "block";
        document.getElementById("gen2").style.display = "block";
        document.getElementById("gen3").style.display = "block";
        document.getElementById("gen4").style.display = "block";
        document.getElementById("gen5").style.display = "block";
        document.getElementById("gen6").style.display = "block";

    }

    else {

        document.getElementById("gen1").style.display = "none";
        document.getElementById("gen2").style.display = "none";
        document.getElementById("gen3").style.display = "none";
        document.getElementById("gen4").style.display = "none";
        document.getElementById("gen5").style.display = "none";
        document.getElementById("gen6").style.display = "none";
    }

}
function mut() {
   if
        (document.getElementById("utmsi").selectedIndex == "2"  ) {
       document.getElementById("screenind").style.display = "block";
       document.getElementById("datumlab").style.display = "block";

    }
  
    else {
        document.getElementById("screenind").style.display = "none";
        document.getElementById("gen1").style.display = "none";
        document.getElementById("gen2").style.display = "none";
        document.getElementById("gen3").style.display = "none";
        document.getElementById("gen4").style.display = "none";
        document.getElementById("gen5").style.display = "none";
        document.getElementById("gen6").style.display = "none";
        document.getElementById("datumlab").style.display = "none;"

    }
}
function baspar() {
    if (document.getElementById("genlista1").selectedIndex == "1") {
        document.getElementById("mlh1").style.display = "block"
        document.getElementById("brca1").style.display = "none";
    }
    else if (document.getElementById("genlista1").selectedIndex == "9") {
        document.getElementById("mlh1").style.display = "none"
        document.getElementById("brca1").style.display = "block";
    }
    else {
        document.getElementById("mlh1").style.display = "none"
        document.getElementById("brca1").style.display = "none";
    }
    
}
function protein() {
    if (document.getElementById("genlista2").selectedIndex == "4") {
        document.getElementById("pms2").style.display = "block"
        document.getElementById("brca2").style.display = "none";
    }
    else if (document.getElementById("genlista2").selectedIndex == "10") {
        document.getElementById("pms2").style.display = "none"
        document.getElementById("brca2").style.display = "block";
    }
    else {
        document.getElementById("pms2").style.display = "none"
        document.getElementById("brca2").style.display = "none";
    }

}
function canin() {
    if (document.getElementById("egencancer").selectedIndex == "2") {
        document.getElementById("caninca").style.display = "block"
        document.getElementById("cancer").style.display = "none";
    }
    else if
        (document.getElementById("egencancer").selectedIndex == "3") {
        document.getElementById("caninca").style.display = "none"
        document.getElementById("cancer").style.display = "block";
    }
    else {
        document.getElementById("caninca").style.display = "none"
        document.getElementById("cancer").style.display = "none";
    }
}
function ventrikelcheck() {
    if (document.getElementById("egenventr").checked) {
        document.getElementById("eventrikel").style.display = "block";
    }
    else {
        document.getElementById("eventrikel").style.display = "none";
    }
}
function koloncheck() {
    if (document.getElementById("kolon").checked) {
        document.getElementById("colon").style.display = "block";
    }
    else {
        document.getElementById("colon").style.display = "none";
    }
}
function magtarmcheck() {
    if (document.getElementById("magtarm").checked) {
        document.getElementById("magtarmkanal").style.display = "block";
    }
    else {
        document.getElementById("magtarmkanal").style.display = "none";
    }
}
function brostcheck() {
    if (document.getElementById("bros").checked) {
        document.getElementById("brost").style.display = "block";
    }
    else {
        document.getElementById("brost").style.display = "none";
    }
}
function livmodercheck() {
    if (document.getElementById("livm").checked) {
        document.getElementById("livmoder").style.display = "block";
    }
    else {
        document.getElementById("livmoder").style.display = "none";
    }
}
function livmoderhalscheck() {
    if (document.getElementById("livmhals").checked) {
        document.getElementById("livmoderhals").style.display = "block";
    }
    else {
        document.getElementById("livmoderhals").style.display = "none";
    }
}
function ovariumcheck() {
    if (document.getElementById("ovar").checked) {
        document.getElementById("ovarium").style.display = "block";
    }
    else {
        document.getElementById("ovarium").style.display = "none";
    }
}
function hjarnacheck() {
    if (document.getElementById("hjarn").checked) {
        document.getElementById("hjarna").style.display = "block";
    }
    else {
        document.getElementById("hjarna").style.display = "none";
    }
}
function melanomcheck() {
    if (document.getElementById("melan").checked) {
        document.getElementById("melanom").style.display = "block";
    }
    else {
        document.getElementById("melanom").style.display = "none";
    }
}
function levercheck() {
    if (document.getElementById("lev").checked) {
        document.getElementById("lever").style.display = "block";
    }
    else {
        document.getElementById("lever").style.display = "none";
    }
}
function lungacheck() {
    if (document.getElementById("lung").checked) {
        document.getElementById("lunga").style.display = "block";
    }
    else {
        document.getElementById("lunga").style.display = "none";
    }
}
function sarkomcheck() {
    if (document.getElementById("sark").checked) {
        document.getElementById("sarkom").style.display = "block";
    }
    else {
        document.getElementById("sarkom").style.display = "none";
    }
}
function leukemicheck() {
    if (document.getElementById("leuk").checked) {
        document.getElementById("leukemi").style.display = "block";
    }
    else {
        document.getElementById("leukemi").style.display = "none";
    }
}
function lymfomcheck() {
    if (document.getElementById("lymf").checked) {
        document.getElementById("lymfom").style.display = "block";
    }
    else {
        document.getElementById("lymfom").style.display = "none";
    }
}
function annatdiacheck() {
    if (document.getElementById("anndia").checked) {
        document.getElementById("annatdia").style.display = "block";
    }
    else {
        document.getElementById("annatdia").style.display = "none";
    }
}
function kontrollprog() {
    if (document.getElementById("kontr").selectedIndex == "1") {
        document.getElementById("kontroll").style.display = "block";
    }
    else {
        document.getElementById("kontroll").style.display = "none";
    }
}
function koloskopikomplik() {
    if (document.getElementById("koloskopi").selectedIndex == "2") {
        document.getElementById("komplikation").style.display = "block";
    }
    else {
        document.getElementById("komplikation").style.display = "none";
    }
}
function kompl() {
    if (document.getElementById("annankomplik").selectedIndex == "5") {
        document.getElementById("annkomplikation").style.display = "block";
    }
    else {
        document.getElementById("annkomplikation").style.display = "none";
    }
}
function indexcol() {
    if (document.getElementById("index").selectedIndex == "2") {
        document.getElementById("colos").style.display = "none";
    }
    else {
        document.getElementById("colos").style.display = "block";
    }
}
function besoktyp() {
    if (document.getElementById("besok").selectedIndex == "2" || document.getElementById("besok").selectedIndex == "1" || document.getElementById("besok").selectedIndex == "3") {
        document.getElementById("typkontakt").style.display = "block";
    }
    else {
        document.getElementById("typkontakt").style.display = "none";
    }
}
function interv() {
    if (document.getElementById("colonkontroll").selectedIndex == "2") {
        document.getElementById("colonkoll").style.display = "block";
    }
    else {
        document.getElementById("colonkoll").style.display = "none";
    }
}
function labutfall() {
    if (document.getElementById("labindivid").selectedIndex == "2") {
        document.getElementById("utfall").style.display = "block";
    }
    else {
        document.getElementById("utfall").style.display = "none";
    }
}
function profop() {
    if (document.getElementById("prof").selectedIndex == "2") {
        document.getElementById("profylop").style.display = "block";
    }
    else {
        document.getElementById("profylop").style.display = "none";
    }
}
function annankontr() {
    if (document.getElementById("fastkontr").selectedIndex == "1") {
        document.getElementById("reason").style.display = "block";
    }
    else {
        document.getElementById("reason").style.display = "none";
    }
}
function programvari(){
    if (document.getElementById("organprogram").selectedIndex == "2") {
        document.getElementById("specvari").style.display = "block"
        document.getElementById("patientkolon").style.display = "block";
        document.getElementById("fyndkolon").style.display = "block";
        document.getElementById("padkolon").style.display = "block";
        document.getElementById("rtgkolon").style.display = "block";
        document.getElementById("endkolon").style.display = "block";
        document.getElementById("ulkolon").style.display = "block";
        document.getElementById("biopkolon").style.display = "block";
    }
    else if 
        (document.getElementById("organprogram").selectedIndex == "1") {
        document.getElementById("specvari").style.display = "block"
        document.getElementById("rtgkolon").style.display = "block";
        document.getElementById("endkolon").style.display = "block";
        document.getElementById("ulkolon").style.display = "block";
        document.getElementById("biopkolon").style.display = "block";
    }
    else {
        document.getElementById("specvari").style.display = "none"
        document.getElementById("patientkolon").style.display = "none";
        document.getElementById("fyndkolon").style.display = "none";
        document.getElementById("padkolon").style.display = "none";
        document.getElementById("rtgkolon").style.display = "none";
        document.getElementById("endkolon").style.display = "none";
        document.getElementById("ulkolon").style.display = "none";
        document.getElementById("biopkolon").style.display = "none";
    }
}
function tidigoperation(){
    if (document.getElementById("tidop").selectedIndex == "2") {
        document.getElementById("tidopererad").style.display = "block";
    }
    else {
        document.getElementById("tidopererad").style.display = "none";
    }
}
function visartg() {
    if (document.getElementById("rtg").selectedIndex == "2") {
        document.getElementById("undersokningarrtg").style.display = "block";
    }
    else {
        document.getElementById("undersokningarrtg").style.display = "none";
    }
}
function visaendo() {
    if (document.getElementById("endo").selectedIndex == "2") {
        document.getElementById("undersokningarendo").style.display = "block";
    }
    else {
        document.getElementById("undersokningarendo").style.display = "none";
    }
}
function visaul() {
    if (document.getElementById("ul").selectedIndex == "2") {
        document.getElementById("undersokningarul").style.display = "block";
    }
    else {
        document.getElementById("undersokningarul").style.display = "none";
    }
}
function visabiop() {
    if (document.getElementById("biop").selectedIndex == "2") {
        document.getElementById("undersokningarbiop").style.display = "block";
    }
    else {
        document.getElementById("undersokningarbiop").style.display = "none";
    }
}
function fyndvidareatg() {
    if (document.getElementById("fyndundersok").selectedIndex == "2") {
        document.getElementById("vidareundersokning").style.display = "block";
    }
    else {
        document.getElementById("vidareundersokning").style.display = "none";
    }
}
